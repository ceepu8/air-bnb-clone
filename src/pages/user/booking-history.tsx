import MainLayout from "@/layouts/MainLayout"
import { BookingHistoryView } from "@/views/BookingHistory"
import React from "react"

const BookingHistoryPage = () => {
  return (
    <>
      <BookingHistoryView />
    </>
  )
}
BookingHistoryPage.Layout = MainLayout

export default BookingHistoryPage
