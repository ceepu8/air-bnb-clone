import { Pagination } from "@/components"
import { BOOKING } from "@/constants"
import { useGetBookingList, useGetMe } from "@/hooks"
import { BookingInterFace } from "@/interfaces"
import { useGetStartEnd } from "@/utils"
import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { BookingItem } from "./BookingItem"

export const BookingHistoryView = () => {
  const { me } = useGetMe()
  const { data: bookings } = useGetBookingList(me?.id)
  const router = useRouter()

  const { pageSize } = router.query
  const { start, end } = useGetStartEnd(Number(pageSize))

  useEffect(() => {
    if (isEmpty(me)) {
      router.push("/")
    }
  }, [me])

  return (
    <section className="mx-auto mt-8 w-full max-w-[1080px] px-12">
      <h1 className="text-3xl font-semibold text-very-dark-gray">{BOOKING.HISTORY.TITLE}</h1>

      <div className="mt-8 min-h-[520px]">
        {isEmpty(bookings) && <p>{BOOKING.HISTORY.EMPTY}</p>}
        {bookings?.slice(start, end).map((booking: BookingInterFace) => {
          return <BookingItem key={booking?.id} {...booking} />
        })}
      </div>
      <Pagination totalCount={bookings?.length} pageSize={2} currentPage={Number(pageSize)} />
    </section>
  )
}
