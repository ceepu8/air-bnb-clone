import MainLayout from "@/layouts/MainLayout"
import { BookingHistoryView } from "@/views/BookingHistory"
import { isEmpty } from "lodash"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

const BookingHistoryPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (isEmpty(router.query)) {
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
