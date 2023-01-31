import MainLayout from "@/layouts/MainLayout"
import { BookingHistoryView } from "@/views/BookingHistory"
import { useRouter } from "next/router"
import { useEffect } from "react"

const BookingHistoryPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.query?.pageSize) {
      router.replace({ query: { pageSize: 1 } })
    }
  }, [router.query])

  return (
    <>
      <BookingHistoryView />
    </>
  )
}
BookingHistoryPage.Layout = MainLayout

export default BookingHistoryPage
