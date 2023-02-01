import { HEAD_TYPE } from "@/constants"
import MainLayout from "@/layouts/MainLayout"
import { RoomDetailView } from "@/views/RoomDetail"
import Head from "next/head"

const RoomDetail = () => {
  return (
    <>
      <Head>
        <title>{HEAD_TYPE.ROOM_DETAIL}</title>
      </Head>
      <RoomDetailView />
    </>
  )
}
RoomDetail.Layout = MainLayout

export default RoomDetail
