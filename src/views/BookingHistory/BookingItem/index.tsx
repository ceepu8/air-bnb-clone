import { Button, Popover } from "@/components"
import { useAlert } from "@/components/base/Alert"
import { FORMAT_DATE, MESSAGE } from "@/constants"
import { useDeleteBooking, useGetRoomDetail } from "@/hooks"
import { BookingInterFace } from "@/interfaces"
import dayjs from "dayjs"
import Image from "next/image"
import { useMemo } from "react"

type PopConfirmType = {
  onClick: () => void
}

const PopConfirm = ({ onClick }: PopConfirmType) => {
  const renderConfirmContent = () => {
    return (
      <div>
        <p className="font-semibold">Bạn có chắc chắn muốn huỷ đặt phòng?</p>
        <div className="mt-4 text-right">
          <Button variant="secondary" size="tiny" fullWidth={false} onClick={onClick}>
            YES
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Popover placement="bottom" content={renderConfirmContent()} hasClose>
      <Button size="small" fullWidth={false}>
        Huỷ đặt phòng
      </Button>
    </Popover>
  )
}

export const BookingItem = (props: BookingInterFace) => {
  const { id, ngayDen, ngayDi, maPhong, soLuongKhach } = props || {}

  const { data: room = {} } = useGetRoomDetail(maPhong)
  const isDeleteBookingValid = useMemo(() => dayjs(ngayDen) > dayjs(new Date()), [ngayDen])

  const { doDeleteBook } = useDeleteBooking()
  const alert = useAlert()

  const handleDeleteBook = (id: string | number | undefined) => {
    doDeleteBook(id, {
      onSuccess: () => {
        alert.success(MESSAGE.DELETE_BOOKING_SUCCESS)
        window.location.reload()
      },
    })
  }

  return (
    <div className="mt-6 rounded-md border-[1px] border-solid border-light-gray p-4 shadow">
      <h1 className="text-2xl font-semibold">#{id}</h1>

      <div className="mt-4 flex items-start gap-x-8">
        <div className="mt-2 shrink-0">
          {room?.hinhAnh && (
            <Image
              src={room?.hinhAnh}
              width={350}
              height={150}
              alt="room"
              className="rounded-md object-cover"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-black-gray">{room?.tenPhong}</h3>
          <p className="text-sm text-very-dark-gray">
            Phòng ngủ: {room?.phongNgu} &#x2022; Phòng tắm: {room?.phongTam} &#x2022; Giường:{" "}
            {room?.giuong}
          </p>

          <div className="mt-4 flex items-center gap-x-8">
            <div>
              <p className="text-xs text-very-dark-gray">Check-in</p>
              <span className="font-medium text-black-gray">
                {dayjs(ngayDen).format(FORMAT_DATE.SPECIFIC_WITH_YEAR)}
              </span>
            </div>
            <div>
              <p className="text-xs text-very-dark-gray">Check-out</p>
              <span className="font-medium text-black-gray">
                {dayjs(ngayDi).format(FORMAT_DATE.SPECIFIC_WITH_YEAR)}
              </span>
            </div>
            <div>
              <p className="text-xs text-very-dark-gray">Guest</p>
              <span className="font-medium text-black-gray">{soLuongKhach}</span>
            </div>
          </div>

          {isDeleteBookingValid ? (
            <div className="mt-4">
              <PopConfirm onClick={() => handleDeleteBook(id)} />
            </div>
          ) : (
            <div className="mt-4">
              <Button size="small" fullWidth={false}>
                Bình luận
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
