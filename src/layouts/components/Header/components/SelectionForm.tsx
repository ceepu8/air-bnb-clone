import { BiSearch } from "react-icons/bi"

import { Button } from "@/components"
import { DateSelection, MapSelection, PeopleSelection } from "@/components/selections"
import { usePlaceSearchForm } from "@/hooks"
import { SearchFormContext } from "@/store/contexts"

const SelectionForm = () => {
  const { state, setState } = usePlaceSearchForm()

  return (
    <form className="mx-auto max-w-[800px]">
      <div className="relative grid grid-cols-6 items-center rounded-full border border-solid border-gray bg-gray">
        <SearchFormContext.Provider value={{ state, setState }}>
          <div className="col-span-2">
            <MapSelection />
          </div>
          <div className="col-span-2">
            <DateSelection />
          </div>
          <div className="relative col-span-2">
            <PeopleSelection />
            <Button
              className="bg-linear-gradient-100 absolute right-0 top-1/2 mr-4 -translate-y-1/2 py-3 px-5 text-sm font-bold "
              shape="circle"
              icon={<BiSearch className="inline-block" />}
            >
              Tìm kiếm
            </Button>
          </div>
        </SearchFormContext.Provider>
      </div>
    </form>
  )
}

export default SelectionForm
