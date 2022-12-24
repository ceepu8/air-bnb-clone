import { addDays, format } from "date-fns"
import { DateRange, DayPicker } from "react-day-picker"
import React, { useState } from "react"

const pastMonth = new Date(2020, 10, 15)

export const Calendar = () => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  let footer = <p>Please pick the first day.</p>
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      )
    }
  }

  return (
    <div className="mt-8">
      <p className="text-xl font-medium">2 đêm tại NewApt D1</p>
      <span className="text-grey-500 text-sm">{footer}</span>
      <div className="my-6 flex flex-col items-center">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={(val) => {
            // dispatch(setDate(val))
            setRange(val)
          }}
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}
