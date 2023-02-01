import { HEAD_TYPE } from "@/constants"
import MainLayout from "@/layouts/MainLayout"
import { BookingHistoryView } from "@/views/BookingHistory"
import Head from "next/head"
import React from "react"
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
      <Head>
        <title>{HEAD_TYPE.BOOKING_HISTORY}</title>
      </Head>
      <BookingHistoryView />
    </>
  )
}
BookingHistoryPage.Layout = MainLayout

export default BookingHistoryPage
