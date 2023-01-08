import { useEffect, useRef } from "react"

import { HeaderNavigate } from "@/components/navigation"
import SelectionForm from "./SelectionForm"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import { SET_SHRINK } from "@/store/actions"

const SelectionBoxExtend = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { isExtended } = useSelector((state: any) => state.searchbar)
  const dispatch = useDispatch()

  const node = ref.current

  const isOutsideClick = (event: any) => {
    if (!node?.contains(event.target)) {
      dispatch(SET_SHRINK())
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
      className={classNames(
        "absolute transition-all duration-[0.4s] ease-in-out",
        isExtended
          ? "visible top-0 left-0 z-50 block max-h-full w-full scale-100 opacity-100"
          : "invisible -top-10 left-6 scale-50 opacity-0"
      )}
    >
      <HeaderNavigate />
      <SelectionForm />
    </div>
  )
}

export default SelectionBoxExtend
