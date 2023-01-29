import { CHECK_IN_DATE, CHECK_OUT_DATE, FORMAT_DATE } from "@/constants"
import dayjs from "dayjs"
import { DateRange, DayPicker } from "react-day-picker"

type CalendarType = {
  date: DateRange | undefined
  numberNights: number
  onSelect: (value: DateRange | undefined) => void
}

export const Calendar = (props: CalendarType) => {
  const { date, onSelect, numberNights } = props || {}
  const disabledDays = [{ from: new Date(1, 1, 1), to: new Date(Date.now() - 24 * 60 * 60 * 1000) }]

  return (
    <div className="relative">
      <p className="text-xl font-medium">
        {date?.from && !date?.to
          ? CHECK_OUT_DATE
          : numberNights
          ? `${numberNights} đêm tại địa điểm này`
          : CHECK_IN_DATE}
      </p>
      <button className="absolute top-1 right-0 flex w-full max-w-[315px] rounded-md border-[1px] border-solid border-dark-gray">
        <div className="flex-1 border-r-[1px] border-solid border-dark-gray p-2 text-left">
          <div className="text-[8px] font-bold leading-3">CHECK-IN</div>
          <div className="text-sm">
            {date?.from ? dayjs(date.from).format(FORMAT_DATE.DEFAULT) : "Thêm ngày"}
          </div>
        </div>
        <div className="flex-1 p-2 text-left">
          <div className="text-[8px] font-bold leading-3">CHECK-OUT</div>
          <div className="text-sm">
            {date?.to ? dayjs(date.to).format(FORMAT_DATE.DEFAULT) : "Thêm ngày"}
          </div>
        </div>
      </button>
      <p className="mt-2 text-sm font-light text-dark-gray">
        {date?.from ? dayjs(date.from).format(FORMAT_DATE.DEFAULT) : ""} -{" "}
        {date?.to ? dayjs(date.to).format(FORMAT_DATE.DEFAULT) : ""}
      </p>
      <div className="my-6 flex flex-col items-center">
        <DayPicker
          showOutsideDays
          disabled={disabledDays}
          mode="range"
          selected={date}
          onSelect={onSelect}
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}
