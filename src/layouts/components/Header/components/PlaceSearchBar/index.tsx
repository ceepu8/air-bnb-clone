import SelectionBox from "./SelectionBox"
import SelectionBoxExtend from "./SelectionBoxExtend"

const PlaceSearchBar = ({
  extendSelectionBox,
  extendComponent,
}: {
  extendSelectionBox: boolean
  extendComponent: (open: boolean) => void
}) => {
  return (
    <>
      <SelectionBoxExtend isToggle={extendSelectionBox} onSet={extendComponent} />
      <SelectionBox isToggle={!extendSelectionBox} onSet={extendComponent} />
    </>
  )
}

export default PlaceSearchBar
