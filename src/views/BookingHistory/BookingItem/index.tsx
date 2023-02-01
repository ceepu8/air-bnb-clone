import { Button } from "@/components"
import { useDeleteBooking, useGetRoomDetail } from "@/hooks"
import { BookingInterFace } from "@/interfaces"
import dayjs from "dayjs"
import Image from "next/image"
import React from "react"

export const BookingItem = (props: BookingInterFace) => {
  const { id, ngayDen, ngayDi, maPhong, soLuongKhach } = props || {}

  const { data: room = {} } = useGetRoomDetail(maPhong)
  const isDeleteBookingValid = dayjs(ngayDen) > dayjs(new Date())

  const { doDeleteBook } = useDeleteBooking()

  const handleDeleteBook = (id: string | number | undefined) => {
    doDeleteBook(id, {})
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
                {dayjs(ngayDen).format("dddd, MMM D, YYYY")}
              </span>
            </div>
            <div>
              <p className="text-xs text-very-dark-gray">Check-out</p>
              <span className="font-medium text-black-gray">
                {dayjs(ngayDi).format("dddd, MMM D, YYYY")}
              </span>
            </div>
            <div>
              <p className="text-xs text-very-dark-gray">Guest</p>
              <span className="font-medium text-black-gray">{soLuongKhach}</span>
            </div>
          </div>

          {isDeleteBookingValid ? (
            <div className="mt-4">
              <Button size="small" fullWidth={false} onClick={() => handleDeleteBook(id)}>
                Huỷ đặt phòng
              </Button>
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
