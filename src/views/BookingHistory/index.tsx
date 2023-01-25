import { Pagination } from "@/components"
import { useGetBookingList } from "@/hooks"
import { BookingInterFace } from "@/interfaces"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { BookingItem } from "./BookingItem"

export const BookingHistoryView = () => {
  const { user = {} } = useSelector((state: any) => state.auth)
  const { data: bookings } = useGetBookingList(user?.id)

  const router = useRouter()

  const { pageSize } = router.query

  const start = () => {
    let index = 0
    for (var i = 1; i < Number(pageSize); i++) {
      index += 2
    }
    return index
  }

  const end = () => {
    let index = 1
    for (var i = 1; i < Number(pageSize); i++) {
      index += 2
    }
    return index + 1
  }

  return (
    <section className="mx-auto mt-8 w-full max-w-[1080px] px-12">
      <h1 className="text-3xl font-semibold text-very-dark-gray">Lịch sử chuyến đi</h1>

      <div className="mt-8 min-h-[650px]">
        {bookings?.slice(start(), end()).map((booking: BookingInterFace) => {
          return <BookingItem {...booking} />
        })}
      </div>
      <Pagination totalCount={bookings?.length} pageSize={2} currentPage={Number(pageSize)} />
    </section>
  )
}
