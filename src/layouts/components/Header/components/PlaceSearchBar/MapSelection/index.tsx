import { useContext } from "react"

import { useMouseLeave } from "@/hooks"
import { SearchFormContext } from "@/store/contexts"

import { CapsuleSelection } from "@/components/selections"
import { DropDown } from "@/components"
import { STATIC_REGIONS } from "@/constants/Header"

type RegionProps = {
  image: string
  name: string
}

const RegionItem = ({ image, name }: RegionProps) => {
  return (
    <div className="w-1/3 p-2">
      <div className="h-[120px]">
        <img
          src={image}
          alt=""
          className="border-grey-300 hover:border-black-100 h-full w-full cursor-pointer rounded-lg border-[1px] border-solid object-cover transition-all"
        />
      </div>
      <p>{name}</p>
    </div>
  )
}

const MapDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <DropDown isOpen={isOpen} className="top-[110%] left-0 max-w-[450px]">
      <h4 className="h4">Tìm kiếm theo khu vực</h4>
      <div className="flex flex-wrap">
        {STATIC_REGIONS.map(({ hinhAnh, tinhThanh }, index) => (
          <RegionItem key={index} image={hinhAnh} name={tinhThanh} />
        ))}
      </div>
    </DropDown>
  )
}

const MapSelection = () => {
  const context = useContext(SearchFormContext)
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()

  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Địa điểm">
        <input
          className="leading-1 bg-transparent text-sm font-light"
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
