import { HEAD_TYPE } from "@/constants"
import MainLayout from "@/layouts/MainLayout"
import { BookingHistoryView } from "@/views/BookingHistory"
import Head from "next/head"
import React from "react"

const BookingHistoryPage = () => {
  return (
    <>
      <Head>
        <title>{HEAD_TYPE.BOOKING_HISTORY}</title>
      </Head>
      <BookingHistoryView />
    </>
  )
}
BookingHistoryPage.Layout = MainLayout

export default BookingHistoryPage
