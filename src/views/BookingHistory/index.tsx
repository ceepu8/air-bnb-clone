import { Pagination } from "@/components"
import { useGetBookingList, useGetMe } from "@/hooks"
import { BookingInterFace } from "@/interfaces"
import { useGetStartEnd } from "@/utils"
import { useRouter } from "next/router"
import { BookingItem } from "./BookingItem"

export const BookingHistoryView = () => {
  const { me } = useGetMe()
  const { data: bookings } = useGetBookingList(me?.id)

  const router = useRouter()

  const { pageSize } = router.query
  const { start, end } = useGetStartEnd(Number(pageSize))

  return (
    <section className="mx-auto mt-8 w-full max-w-[1080px] px-12">
      <h1 className="text-3xl font-semibold text-very-dark-gray">Lịch sử chuyến đi</h1>

      <div className="mt-8 min-h-[650px]">
        {bookings?.slice(start, end).map((booking: BookingInterFace) => {
          return <BookingItem key={booking?.id} {...booking} />
        })}
      </div>
      <Pagination totalCount={bookings?.length} pageSize={2} currentPage={Number(pageSize)} />
    </section>
  )
}
