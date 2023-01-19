import { ButtonForMyLove } from "@/components"
import { SET_SHRINK } from "@/store/actions"
import { useRouter } from "next/router"
import { BiSearch } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import DateSelection from "./DateSelection"
import MapSelection from "./MapSelection"
import PeopleSelection from "./PeopleSelection"

const SelectionForm = () => {
  const router = useRouter()
  const { location = {} } = useSelector((state: any) => state.locationForm)
  const dispatch = useDispatch()

  const doSearch = () => {
    if (location.id) {
      router.push({ query: { locationId: location.id } })
      dispatch(SET_SHRINK())
    }
  }

  return (
    <form className="relative left-1/2 mx-auto min-w-[800px] -translate-x-1/2">
      <div className="relative grid grid-cols-6 items-center rounded-full border border-solid border-light-gray bg-very-light-gray">
        <div className="col-span-2">
          <MapSelection />
        </div>
        <div className="col-span-2">
          <DateSelection />
        </div>
        <div className="relative col-span-2">
          <PeopleSelection />
          <ButtonForMyLove
            shape="circle"
            className="absolute right-2.5 top-1/2 w-max -translate-y-1/2 px-6"
            leftIcon={<BiSearch />}
            disabled={!location.id}
            onClick={doSearch}
          >
            Tìm kiếm
          </ButtonForMyLove>
        </div>
      </div>
    </form>
  )
}

export default SelectionForm
