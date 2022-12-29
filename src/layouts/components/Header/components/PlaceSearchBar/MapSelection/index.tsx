import { useMouseLeave } from "@/hooks"
import { CapsuleSelection } from "@/components/selections"
import { DropDown } from "@/components"
import { STATIC_REGIONS } from "@/constants/Header"
import { useDispatch, useSelector } from "react-redux"
import { SET_LOCATION } from "@/store/actions"
import { FiMapPin } from "react-icons/fi"
import { useEffect, useState } from "react"
import { LocationInterface } from "@/interfaces"

const MapDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const dispatch = useDispatch()
  return (
    <DropDown isOpen={isOpen} className="top-[110%] left-0 max-w-[450px]">
      <h4 className="h4">Tìm kiếm theo khu vực</h4>
      <div className="flex flex-wrap">
        {STATIC_REGIONS.map(({ hinhAnh, tinhThanh, id }) => (
          <button
            className="w-1/3 p-2"
            type="button"
            onClick={() => dispatch(SET_LOCATION({ locationId: id, name: tinhThanh }))}
          >
            <div className="h-[120px]">
              <img
                src={hinhAnh}
                alt=""
                className="border-grey-300 hover:border-black-100 h-full w-full cursor-pointer rounded-lg border-[1px] border-solid object-cover transition-all"
              />
            </div>
            <p>{tinhThanh}</p>
          </button>
        ))}
      </div>
    </DropDown>
  )
}

const SearchDropdown = ({ isOpen, searchList }: { isOpen: boolean; searchList: any }) => {
  const dispatch = useDispatch()

  return (
    <DropDown isOpen={isOpen} className="top-[110%] left-0 max-w-[450px] !p-3">
      <div>
        {searchList.map(({ tinhThanh, tenViTri, id }: LocationInterface) => {
          return (
            <div
              className="my-2 flex cursor-pointer items-center px-8 py-2 hover:bg-white-gray"
              onClick={() => dispatch(SET_LOCATION({ locationId: id, name: tinhThanh }))}
            >
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-very-light-gray">
                <FiMapPin className="h-[22px] w-[22px]" />
              </div>
              <p className="text-md font-light tracking-wide">
                {tenViTri}, {tinhThanh}
              </p>
            </div>
          )
        })}
      </div>
    </DropDown>
  )
}

const convertText = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

const filterSearchList = (array: LocationInterface[], value: string) => {
  return array.filter(({ tinhThanh }: LocationInterface) =>
    convertText(tinhThanh).includes(convertText(value || ""))
  )
}

const MapSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const { location } = useSelector((state: any) => state.locationForm)
  const [value, setValue] = useState<string>(location.name)
  const [recommend, setRecommend] = useState<Boolean>(true)
  const [data] = useState<LocationInterface[]>(STATIC_REGIONS)

  useEffect(() => {
    setValue(location.name)
  }, [location])

  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Địa điểm">
        <input
          className="leading-1 bg-transparent text-sm font-light"
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          value={value}
          onChange={(e) => {
            const { value } = e.target
            setRecommend(false)
            setValue(value)

            if (!value) setRecommend(true)
          }}
        />
      </CapsuleSelection>
      {recommend && <MapDropdown isOpen={isMouseIn} />}
      {!recommend && (
        <SearchDropdown isOpen={isMouseIn} searchList={filterSearchList(data, value)} />
      )}
    </div>
  )
}

export default MapSelection
