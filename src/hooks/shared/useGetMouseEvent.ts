import { useEffect, useState } from "react"

export const useGetMouseEvent = (ref: any) => {
  const [{ mouseX, mouseY }, setMousePos] = useState({ mouseX: 0, mouseY: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ mouseX: event.clientX, mouseY: event.clientY })
    }

    if (ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (ref.current) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return { mouseX, mouseY }
}
