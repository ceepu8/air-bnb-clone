import { BiSearch } from "react-icons/bi"

import { Button } from "@/components"
import MapSelection from "./MapSelection"
import DateSelection from "./DateSelection"
import PeopleSelection from "./PeopleSelection"

const SelectionForm = () => {
  return (
    <form className="mx-auto max-w-[800px]">
      <div className="relative grid grid-cols-6 items-center rounded-full border border-solid border-light-gray bg-gray">
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
          >
            Tìm kiếm
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SelectionForm
