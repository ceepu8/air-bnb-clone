import cn from "classnames"
import { domAnimation, LazyMotion } from "framer-motion"
import Head from "next/head"
import { useMemo } from "react"

import { LayoutProps } from "@/interfaces"

import Header from "./components/Header"
import Footer from "./components/Footer"

const HEADER_HEIGHT = 35
function MainLayout({ children, title, mainClassName }: LayoutProps) {
  const mainStyles = useMemo(() => {
    const headerHeight = !title ? 0 : HEADER_HEIGHT

    return {
      // minHeight: `calc(100vh - ${headerHeight + navigationHeight + tabHeight}px)`,
      paddingTop: `${headerHeight + 70}px`,
    }
  }, [title])

  return (
    <>
      <Head>
        <title>{title || "Air bnb"}</title>
      </Head>
      <LazyMotion features={domAnimation}>
        <div className="relative m-0 p-0">
          <Header />
          <main
            style={mainStyles}
            className={cn("relative flex h-full min-h-screen flex-col", mainClassName)}
          >
            {children}
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </>
  )
}

export default MainLayout
