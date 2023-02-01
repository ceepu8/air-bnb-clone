import { Button, Calendar, Dropdown } from "@/components"
import { useOnClickOutside } from "@/hooks"
import { CLEAR_DATE, SET_DATE } from "@/store/actions"
import { format } from "date-fns"
import { useRef } from "react"
import { DateRange } from "react-day-picker"
import { useDispatch, useSelector } from "react-redux"

const Popup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const { date, numberNights } = useSelector((state: any) => state.roomForm)

  const dispatch = useDispatch()

  const handleClearDate = () => {
    dispatch(CLEAR_DATE())
  }

  return (
    <Dropdown
      isOpen={isOpen}
      className="absolute -top-[50px] -right-8 hidden min-h-[300px] min-w-[661px] rounded-2xl bg-white py-4 px-8"
    >
      <div className="relative mt-8 flex items-center justify-between">
        <Calendar
          date={date}
          numberNights={numberNights}
          onSelect={(value: DateRange | undefined) => {
            dispatch(SET_DATE(value))
          }}
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="light" size="small" fullWidth={false} onClick={handleClearDate}>
          Xoá ngày
        </Button>
        <Button variant="secondary" size="small" fullWidth={false} onClick={handleClose}>
          Đóng
        </Button>
      </div>
    </Dropdown>
  )
}

export const DatePicker = ({
  isCheckRoom,
  doOpenCheckRoom,
  doCloseCheckRoom,
}: {
  isCheckRoom: boolean
  doOpenCheckRoom: () => void
  doCloseCheckRoom: () => void
}) => {
  const date = useSelector((state: any) => state.roomForm.date)

  const ref = useRef(null)
  useOnClickOutside<HTMLDivElement>(ref, doCloseCheckRoom)

  return (
    <div ref={ref} className="relative">
      <button
        className="mt-4 flex w-full rounded-t-md border-[1px] border-solid border-dark-gray"
        onClick={doOpenCheckRoom}
      >
        <div className="flex-1 border-r-[1px] border-solid border-dark-gray p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
          <div className="text-grey-500 text-sm">
            {date?.from ? format(date?.from, "dd/MM/yyyy") : "Thêm ngày"}
          </div>
        </div>
        <div className="flex-1 p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">CHECK-OUT</div>
          <div className="text-grey-500 text-sm">
            {date?.to ? format(date?.to, "dd/MM/yyyy") : "Thêm ngày"}
          </div>
        </div>
      </button>
      <Popup isOpen={isCheckRoom} handleClose={doCloseCheckRoom} />
    </div>
  )
}
