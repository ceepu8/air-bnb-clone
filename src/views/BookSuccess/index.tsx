import { Button, Modal } from "@/components"
import { AirbnbLogo } from "@/components/icons"
import { BOOKING_NOTI, BOOKING_NOT_CHARGED, FORMAT_DATE } from "@/constants"
import { useGetRoomDetail } from "@/hooks"
import { CLEAR_BOOK } from "@/store/actions"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const BookSuccessView = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { bookInfor, isSuccess } = useSelector((state: any) => state.bookSuccess)
  const { ngayDen, ngayDi, soLuongKhach, maPhong } = bookInfor || {}

  const { data: room = {} } = useGetRoomDetail(maPhong)

  useEffect(() => {
    dispatch(CLEAR_BOOK())
  }, [])

  return (
    <Modal
      isOpen={isSuccess}
      onClose={() => {
        router.replace("/")
      }}
    >
      <div className="px-16 pb-8">
        <div>
          <AirbnbLogo className="mx-auto" />
        </div>
        <div className="mt-12 text-center">
          <h1 className="text-3xl font-bold text-black-gray">Request Sent</h1>
          <p className="mt-4 px-12 text-very-dark-gray">{BOOKING_NOTI}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">{room?.tenPhong}</h2>
          <p className="text-very-dark-gray">
            Phòng ngủ: {room?.phongNgu} &#x2022; Phòng tắm: {room?.phongTam} &#x2022; Giường:{" "}
            {room?.giuong}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-y-8">
          <div className="col-span-1">
            <p className="text-very-dark-gray">Check-in</p>
            <span className="font-semibold">{dayjs(ngayDen).format(FORMAT_DATE.SPECIFIC)}</span>
          </div>
          <div className="col-span-1">
            <p className="text-very-dark-gray">Check-out</p>
            <span className="font-semibold">{dayjs(ngayDi).format(FORMAT_DATE.SPECIFIC)}</span>
          </div>
          <div>
            <p className="text-very-dark-gray">Guest(s)</p>
            <span className="font-semibold">{soLuongKhach}</span>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-very-dark-gray">{BOOKING_NOT_CHARGED}</p>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => {
              router.replace("/user/booking-history")
            }}
          >
            Xem lịch sử chuyến đi
          </Button>
        </div>
      </div>
    </Modal>
  )
}
