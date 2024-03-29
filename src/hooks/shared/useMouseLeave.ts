import { useEffect, useRef, useState } from "react"

function useMouseLeave<T extends HTMLElement>() {
  const [value, setValue] = useState(false)
  const ref = useRef<T>(null)

  const handleClose = () => {
    setValue(false)
  }

  const handleOpen = () => {
    setValue(true)
  }

  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent) {
      const isMouseDown = ref.current?.contains(target as Node) ? true : false
      setValue(isMouseDown)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return { ref, value, handleClose, handleOpen }
}

export { useMouseLeave }
