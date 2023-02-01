import { useMouseLeave } from "@/hooks"
import { CapsuleSelection } from "@/components/selections"
import { DateRange } from "react-day-picker"
import { useDispatch, useSelector } from "react-redux"
import { SET_LOCATION_DATE } from "@/store/actions"
import { format } from "date-fns"
import { Calendar, Dropdown } from "@/components"

const DateDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const { date, numberNights } = useSelector((state: any) => state.locationForm)
  const dispatch = useDispatch()
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-[50%] -translate-x-1/2">
      <Calendar
        date={date}
        numberNights={numberNights}
        onSelect={(value: DateRange | undefined) => {
          dispatch(SET_LOCATION_DATE(value))
        }}
      />
    </Dropdown>
  )
}

const DateSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const { date } = useSelector((state: any) => state.locationForm)

  return (
    <div ref={ref} className="grid grid-cols-2">
      <CapsuleSelection isActive={isMouseIn} labelText="Nhận phòng">
        <div className="leading-1 bg-transparent text-sm font-light text-dark-gray">
          {date?.from ? format(date?.from, "dd/MM/yyyy") : "Thêm ngày"}
        </div>
      </CapsuleSelection>
      <CapsuleSelection isActive={isMouseIn} labelText="Trả phòng">
        <div className="leading-1 bg-transparent text-sm font-light text-dark-gray">
          {date?.to ? format(date?.to, "dd/MM/yyyy") : "Thêm ngày"}
        </div>
      </CapsuleSelection>
      <DateDropdown isOpen={isMouseIn} />
    </div>
  )
}

export default DateSelection
