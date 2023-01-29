import { CapsuleSelection } from "@/components/selections"
import { useGetLocationList, useInputState, useMouseLeave } from "@/hooks"
import { LocationInterface } from "@/interfaces"
import { SET_LOCATION } from "@/store/actions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FiMapPin } from "react-icons/fi"
import { STATIC_REGIONS } from "@/constants/Header"
import { Dropdown } from "@/components"

const LOCATION_RENDER_LIMIT = 6

const MapDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const dispatch = useDispatch()
  const { data: locationList } = useGetLocationList({ pageSize: LOCATION_RENDER_LIMIT })

  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-0 max-w-[450px]">
      <h4 className="h4">Tìm kiếm theo khu vực</h4>
      <div className="flex flex-wrap">
        {(locationList || []).map((location: LocationInterface) => {
          const { hinhAnh, tinhThanh, id } = location
          return (
            <button
              key={id}
              className="w-1/3 p-2"
              type="button"
              onClick={() => {
                dispatch(SET_LOCATION(location))
              }}
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
          )
        })}
      </div>
    </Dropdown>
  )
}

const filterSearchList = (array: LocationInterface[], value: string) => {
  return array.filter(({ tinhThanh }: LocationInterface) =>
    convertText(tinhThanh).includes(convertText(value || ""))
  )
}

const SearchDropdown = ({ isOpen, value }: { isOpen: boolean; value: any }) => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState("")
  const locationList = filterSearchList(STATIC_REGIONS, keyword)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setKeyword(value)
    }, 500)

    return () => clearTimeout(timeOut)
  }, [value])

  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-0 max-w-[450px] !p-3">
      <div>
        {(locationList || []).map((location: LocationInterface) => {
          const { tinhThanh, tenViTri, id } = location
          return (
            <div
              key={id}
              className="my-2 flex cursor-pointer items-center px-8 py-2 hover:bg-white-gray"
              onClick={() => {
                dispatch(SET_LOCATION(location))
              }}
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
    </Dropdown>
  )
}

const convertText = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

const MapSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const { location } = useSelector((state: any) => state.locationForm)
  const [value, setValue] = useInputState<string>(location.name)

  const [recommend, setRecommend] = useState<Boolean>(true)

  useEffect(() => {
    setValue(location.tinhThanh)
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
      {!recommend && <SearchDropdown isOpen={isMouseIn} value={value} />}
    </div>
  )
}

export default MapSelection
