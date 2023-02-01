import { HEAD_TYPE } from "@/constants"
import MainLayout from "@/layouts/MainLayout"
import UserView from "@/views/User"
import Head from "next/head"

const Information = () => {
  return (
    <>
      <Head>
        <title>{HEAD_TYPE.USER}</title>
      </Head>
      <UserView />
    </>
  )
}

Information.Layout = MainLayout

export default Information
