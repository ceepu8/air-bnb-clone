import Head from "next/head"
import HomeView from "@/views/Home"
import MainLayout from "@/layouts/MainLayout"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ceepu8 Air bnb clone</title>
        <meta name="description" content="Sucre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </>
  )
}

HomePage.Layout = MainLayout
