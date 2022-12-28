import { useContext } from "react"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"

import { DropDown } from "@/components"
import { useMouseLeave, usePlaceSearchForm } from "@/hooks"
import { SearchFormContext } from "@/store/contexts"

import CapsuleSelection from "../CapsuleSelection"

type SelectionProps = {
  type: string
  subNote: string
  code: string
}

const PEOPLE_SELECTION_LIST = [
  {
    type: "Người lớn",
    subNote: "Từ 13 tuổi trở lên",
    code: "adult",
  },
  {
    type: "Trẻ em",
    subNote: "Độ tuổi 2-12",
    code: "children",
  },
  {
    type: "Em bé",
    subNote: "Dưới 2 tuổi",
    code: "toddler",
  },
]

const Selection = ({ type, subNote, code }: SelectionProps) => {
  const { handleIncreasePeople, handleDecreasePeople } = usePlaceSearchForm(code)
  const context = useContext(SearchFormContext)

  return (
    <div className="mt-5 flex items-center justify-between">
      <div>
        <p className="text-lg font-bold">{type}</p>
        <p className="text-medGrey">{subNote}</p>
      </div>

      <div className="flex items-center justify-between">
        <button type="button" onClick={handleDecreasePeople}>
          <AiFillMinusCircle className="text-medGrey text-[40px]" />
        </button>
        <p className="input-field m-4 max-w-[10px] text-xl">
          {context?.state.people[code as keyof typeof context.state.people]}
        </p>
        <button type="button" onClick={handleIncreasePeople}>
          <AiFillPlusCircle className="text-medGrey text-[40px]" />
        </button>
      </div>
    </div>
  )
}

const PeopleDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <DropDown isOpen={isOpen} className="top-[110%] right-0 min-w-[350px]">
      {PEOPLE_SELECTION_LIST.map((selection, index) => {
        return (
          <Selection
            key={index}
            code={selection.code}
            type={selection.type}
            subNote={selection.subNote}
          />
        )
      })}
    </DropDown>
  )
}

const PeopleSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const context = useContext(SearchFormContext)

  const calcTotal = (object: any) => {
    const res = Object.keys(object).reduce((result, key) => {
      result += object[key]
      return result
    }, 0)

    return res
  }
  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Khách">
        <div className="leading-1 bg-transparent text-sm font-light text-dark-gray">
          {calcTotal(context?.state.people) === 0 ? "Thêm khách" : calcTotal(context?.state.people)}
        </div>
      </CapsuleSelection>
      <PeopleDropdown isOpen={isMouseIn} />
    </div>
  )
}

export default PeopleSelection
