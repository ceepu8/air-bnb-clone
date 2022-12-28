import { format } from "date-fns"
import { useContext } from "react"

import { DateDropdown } from "@/components"
import { useMouseLeave } from "@/hooks"
import { SearchFormContext } from "@/store/contexts"

import CapsuleSelection from "../CapsuleSelection"

const DateSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const context = useContext(SearchFormContext)

  return (
    <div ref={ref} className="grid grid-cols-2">
      <CapsuleSelection isActive={isMouseIn} labelText="Nhận phòng">
        <div className="leading-1 bg-transparent text-sm font-light text-dark-gray">
          {context?.state.date
            ? context?.state.date?.from
              ? format(context?.state.date?.from, "PP")
              : "Thêm ngày"
            : "Thêm ngày"}
        </div>
      </CapsuleSelection>
      <CapsuleSelection isActive={isMouseIn} labelText="Trả phòng">
        <div className="leading-1 bg-transparent text-sm font-light text-dark-gray">
          {context?.state.date
            ? context?.state.date?.to
              ? format(context?.state.date?.to, "PP")
              : "Thêm ngày"
            : "Thêm ngày"}
        </div>
      </CapsuleSelection>
      <DateDropdown isOpen={isMouseIn} range={context?.state.date} />
    </div>
  )
}

export default DateSelection
