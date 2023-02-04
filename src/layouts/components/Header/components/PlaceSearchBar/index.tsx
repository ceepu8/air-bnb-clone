import { SET_SHRINK } from "@/store/actions"
import { useDispatch, useSelector } from "react-redux"
import SelectionBox from "./SelectionBox"
import SelectionBoxExtend from "./SelectionBoxExtend"
import { useEventListener } from "@/hooks"
import { useCallback } from "react"

const PlaceSearchBar = ({}: {}) => {
  const dispatch = useDispatch()
  const { isExtended } = useSelector((state: any) => state.searchbar)

  const handler = useCallback(() => {
    if (!isExtended) {
      dispatch(SET_SHRINK())
    }
  }, [isExtended])

  useEventListener("scroll", handler)

  return (
    <>
      <SelectionBoxExtend />
      <SelectionBox />
    </>
  )
}

export default PlaceSearchBar
