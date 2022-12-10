import { useCallback, useEffect, useState } from "react"
import { animateScroll as scroll, scroller } from "react-scroll"

const optionsScroll = {
  duration: 250,
  delay: 100,
  smooth: "easeInOutQuart",
}

export function useScrollToTop() {
  const scrollToTop = useCallback(() => {
    scroll.scrollToTop({
      ...optionsScroll,
    })
  }, [])

  return scrollToTop
}

export function useOnHeader(heightShow = 400) {
  const [isOnHeader, setIsOnHeader] = useState(true)

  const checkScrollTop = () => {
    if (window.pageYOffset <= heightShow) {
      setIsOnHeader(true)
    } else {
      setIsOnHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  })

  return isOnHeader
}

export function useScrollTo() {
  const scrollTo = useCallback((name: string) => {
    scroller.scrollTo(name, {
      ...optionsScroll,
    })
  }, [])

  return scrollTo
}
