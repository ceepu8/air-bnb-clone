import { useContext } from "react"

import { useMouseLeave } from "@/hooks"
import { SearchFormContext } from "@/store/contexts"

import CapsuleSelection from "../CapsuleSelection"
import MapDropdown from "./MapDropdown"

const MapSelection = () => {
  const context = useContext(SearchFormContext)
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()

  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Địa điểm">
        <input
          className="leading-1 bg-transparent text-xs"
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          value={context?.state.placeId}
        />
      </CapsuleSelection>
      <MapDropdown isOpen={isMouseIn} />
    </div>
  )
}

export default MapSelection
