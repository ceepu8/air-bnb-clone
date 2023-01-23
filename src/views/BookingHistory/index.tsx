import { useGetBookingList } from "@/hooks"
import { Booking } from "@/interfaces"
import React from "react"
import { useSelector } from "react-redux"
import { BookingItem } from "./BookingItem"

export const BookingHistoryView = () => {
  const { user = {} } = useSelector((state: any) => state.auth)
  const { data: bookings } = useGetBookingList(user?.id)
  return (
    <section className="mx-auto mt-8 w-full max-w-[1080px] px-12">
      <h1 className="text-3xl font-semibold text-very-dark-gray">Lịch sử chuyến đi</h1>

      <div className="mt-8">
        {bookings?.map((booking: Booking) => (
          <BookingItem {...booking} />
        ))}
      </div>
    </section>
  )
}
