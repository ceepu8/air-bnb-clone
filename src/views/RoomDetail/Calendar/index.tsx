import { DateRange, DayPicker } from "react-day-picker"
import { useDispatch, useSelector } from "react-redux"
import { SET_DATE } from "@/store/actions"
import dayjs from "dayjs"
import { format } from "date-fns"

export const Calendar = () => {
  const date = useSelector((state: any) => state.roomForm.date)
  const dispatch = useDispatch()

  const nights = date?.from && date?.to && dayjs(date?.to).diff(dayjs(date?.from), "day")
  const disabledDays = [{ from: new Date(1, 1, 1), to: new Date(Date.now() - 24 * 60 * 60 * 1000) }]

  return (
    <div>
      <p className="text-xl font-medium">
        {date?.from && !date?.to
          ? "Chọn ngày trả phòng"
          : nights
          ? `${nights} đêm tại địa điểm này`
          : "Chọn ngày nhận phòng"}
      </p>
      <p className="mt-2 text-sm font-light text-dark-gray">
        {date?.from ? format(date?.from, "PP") : ""} - {date?.to ? format(date?.to, "PP") : ""}
      </p>
      <div className="my-6 flex flex-col items-center">
        <DayPicker
          showOutsideDays
          disabled={disabledDays}
          mode="range"
          selected={date}
          onSelect={(value: DateRange | undefined) => {
            dispatch(SET_DATE(value))
          }}
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}
