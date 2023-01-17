import { BiSearch } from "react-icons/bi"
import { Button } from "@/components"
import { SET_SHRINK } from "@/store/actions"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import DateSelection from "./DateSelection"
import MapSelection from "./MapSelection"
import PeopleSelection from "./PeopleSelection"

const SelectionForm = () => {
  const router = useRouter()
  const { location = {} } = useSelector((state: any) => state.locationForm)
  const dispatch = useDispatch()
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
          <Button
            variant="primary"
            className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 py-3 px-5 text-sm font-bold "
            shape="circle"
            icon={<BiSearch className="inline-block" />}
            onClick={() => {
              if (location.id) {
                router.replace({ pathname: "/", query: { locationId: location.id } })
                dispatch(SET_SHRINK())
              }
            }}
          >
            Tìm kiếm
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SelectionForm
