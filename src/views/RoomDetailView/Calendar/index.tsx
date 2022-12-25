import { DateRange, DayPicker } from "react-day-picker"
import { useDispatch, useSelector } from "react-redux"
import { SET_DATE } from "@/store/actions"

export const Calendar = () => {
  const date = useSelector((state: any) => state.roomForm.date)
  const dispatch = useDispatch()

  return (
    <div className="mt-8">
      <p className="text-xl font-medium">2 đêm tại NewApt D1</p>
      {/* <span className="text-grey-500 text-sm">{footer}</span> */}
      <div className="my-6 flex flex-col items-center">
        <DayPicker
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
