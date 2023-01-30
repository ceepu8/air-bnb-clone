import { useContext } from "react"
import { DateRange, DayPicker } from "react-day-picker"

import { DropDown } from "."
import { SearchFormProps } from "@/interfaces"
import { SearchFormContext } from "@/store/contexts"

type DateProps = {
  isOpen: boolean
  range: DateRange | undefined
}

const pastMonth = new Date()

const DateDropdown = ({ isOpen, range }: DateProps) => {
  const context = useContext(SearchFormContext)

  return (
    <DropDown isOpen={isOpen} className="top-[110%] left-[50%] -translate-x-1/2">
      <DayPicker
        numberOfMonths={2}
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={(value: DateRange | undefined) => {
          context?.setState?.((state: SearchFormProps) => {
            return {
              ...state,
              date: {
                from: value?.from,
                to: value?.to,
              },
            }
          })
        }}
      />
    </DropDown>
  )
}

export default DateDropdown
