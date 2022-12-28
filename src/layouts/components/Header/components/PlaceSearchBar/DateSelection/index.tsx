import { useMouseLeave } from "@/hooks"
import { CapsuleSelection } from "@/components/selections"
import Dropdown from "@/components/base/DropDown/DropDown"
import { DateRange, DayPicker } from "react-day-picker"
import { useDispatch, useSelector } from "react-redux"
import { SET_LOCATION_DATE } from "@/store/actions"
import { format } from "date-fns"

const DateDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const date = useSelector((state: any) => state.locationForm.date)
  const dispatch = useDispatch()

  const disabledDays = [{ from: new Date(1, 1, 1), to: new Date(Date.now() - 24 * 60 * 60 * 1000) }]
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-[50%] -translate-x-1/2">
      <DayPicker
        showOutsideDays
        disabled={disabledDays}
        mode="range"
        selected={date}
        onSelect={(value: DateRange | undefined) => {
          dispatch(SET_LOCATION_DATE(value))
        }}
        numberOfMonths={2}
      />
    </Dropdown>
  )
}

const DateSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()
  const date = useSelector((state: any) => state.locationForm.date)

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
