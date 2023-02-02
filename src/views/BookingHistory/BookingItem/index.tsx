import { Button, PopConfirm } from "@/components"
import { FORMAT_DATE, MESSAGE } from "@/constants"
import { useDeleteBooking, useGetRoomDetail } from "@/hooks"
import { BookingInterFace } from "@/interfaces"
import dayjs from "dayjs"
import Image from "next/image"

const DeleteBooking = ({ onClick }: { onClick: () => void }) => {
  return (
    <PopConfirm title={MESSAGE.DELETE_BOOKING_CONFIRM} onConfirm={onClick}>
      <Button size="small" fullWidth={false}>
        Huỷ đặt phòng
      </Button>
    </PopConfirm>
  )
}

const CommentBooking = () => {
  return (
    <Button size="small" fullWidth={false}>
      Bình luận
    </Button>
  )
}

export const BookingItem = (props: BookingInterFace) => {
  const { id, ngayDen, ngayDi, maPhong, soLuongKhach } = props || {}

  const { data: room = {} } = useGetRoomDetail(maPhong)
  const isDeleteBookingValid = dayjs(ngayDen) > dayjs(new Date())

  const { doDeleteBook } = useDeleteBooking()

  const handleDeleteBook = () => {
    if (id) {
      doDeleteBook(id)
    }
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
              <DeleteBooking onClick={handleDeleteBook} />
            </div>
          ) : (
            <div className="mt-4">
              <CommentBooking />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
