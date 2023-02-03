import { SET_SHRINK } from "@/store/actions"
import { useDispatch } from "react-redux"
import SelectionBox from "./SelectionBox"
import SelectionBoxExtend from "./SelectionBoxExtend"
import { useEventListener } from "@/hooks"
import { useCallback } from "react"

const PlaceSearchBar = ({}: {}) => {
  const dispatch = useDispatch()

  const handler = useCallback(() => {
    dispatch(SET_SHRINK())
  }, [])

  useEventListener("scroll", handler)

  return (
    <>
      <SelectionBoxExtend />
      <SelectionBox />
    </>
  )
}

export default PlaceSearchBar
