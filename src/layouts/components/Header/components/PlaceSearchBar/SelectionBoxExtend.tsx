import { useEffect, useRef } from "react"

import { HeaderNavigate } from "@/components/navigation"
import SelectionForm from "./SelectionForm"

interface Props {
  onSet: any
  isToggle: boolean
}

const SelectionBoxExtend = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const { onSet, isToggle } = props

  const node = ref.current

  const isOutsideClick = (event: any) => {
    if (!node?.contains(event.target)) {
      onSet(false)
      return
    }
  }
  useEffect(() => {
    if (node) {
      window.addEventListener("mousedown", isOutsideClick)
    }

    return () => {
      window?.removeEventListener("mousedown", isOutsideClick)
    }
  }, [ref.current])
  return (
    <div
      ref={ref}
      className={
        isToggle
          ? "top-0 left-0 block max-h-full w-full scale-100 opacity-100 transition-all"
          : "height-0 absolute -top-[20px] left-[80px] hidden scale-[60] opacity-0 transition-all"
      }
    >
      <HeaderNavigate />
      <SelectionForm />
    </div>
  )
}

export default SelectionBoxExtend
