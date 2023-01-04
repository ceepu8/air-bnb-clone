import dayjs from "dayjs"
import { DateRange, DayPicker } from "react-day-picker"

type CalendarType = {
  date: DateRange
  numberNights: number
  onSelect: (value: DateRange | undefined) => void
}

export const Calendar = (props: CalendarType) => {
  const { date, numberNights, onSelect } = props || {}
  const disabledDays = [{ from: new Date(1, 1, 1), to: new Date(Date.now() - 24 * 60 * 60 * 1000) }]

  return (
    <div>
      <p className="text-xl font-medium">
        {date?.from && !date?.to
          ? "Chọn ngày trả phòng"
          : numberNights
          ? `${numberNights} đêm tại địa điểm này`
          : "Chọn ngày nhận phòng"}
      </p>
      <p className="mt-2 text-sm font-light text-dark-gray">
        {date?.from ? dayjs(date.from).format("DD/MM/YY") : ""} -{" "}
        {date?.to ? dayjs(date.to).format("DD/MM/YY") : ""}
      </p>
      <div className="my-6 flex flex-col items-center">
        <DayPicker
          showOutsideDays
          disabled={disabledDays}
          mode="range"
          selected={date}
          onSelect={(value: DateRange | undefined) => {
            onSelect(value)
          }}
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}
