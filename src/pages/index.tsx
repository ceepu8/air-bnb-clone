import Head from "next/head"
import HomeView from "@/views/Home"
import MainLayout from "@/layouts/MainLayout"
import { HEAD_TYPE } from "@/constants"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{HEAD_TYPE.HOME}</title>
        <meta name="description" content="AirBnB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </>
  )
}

HomePage.Layout = MainLayout
