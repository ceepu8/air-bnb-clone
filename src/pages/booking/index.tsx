import MainLayout from "@/layouts/MainLayout"
import { BookingView } from "@/views/Booking"
import Head from "next/head"

const BookingPage = () => {
  return (
    <>
      <Head>
        <title>Booking</title>
      </Head>
      <BookingView />
    </>
  )
}

BookingPage.Layout = MainLayout

export default BookingPage
