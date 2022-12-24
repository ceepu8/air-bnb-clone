import { Button, DropDown } from "@/components"
import Dropdown from "@/components/navigation/Dropdown"
import { useMouseLeave } from "@/hooks"
import { addDays, format } from "date-fns"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"

const pastMonth = new Date(2020, 10, 15)

const DatePickerPopup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
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
    <DropDown
      isOpen={isOpen}
      className="absolute -top-4 -right-8 hidden min-h-[300px] min-w-[661px] rounded-2xl bg-white py-4 px-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-0 text-xl font-semibold">5 đêm</p>
          <span className="text-sm leading-3 text-dark-gray">123</span>
        </div>

        <button className="flex w-full max-w-[315px] rounded-md border-[1px] border-solid border-dark-gray">
          <div className="flex-1 border-r-[1px] border-solid border-dark-gray p-2 text-left">
            <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
            <div className="text-grey-500 text-sm">123</div>
          </div>
          <div className="flex-1 p-2 text-left">
            <div className="text-[8px] font-semibold leading-3">CHECK-OUT</div>
            <div className="text-grey-500 text-sm">123</div>
          </div>
        </button>
      </div>
      <div className="my-6 flex flex-col items-center">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={(val) => console.log(123)}
          numberOfMonths={2}
        />
      </div>

      <div className="text-right">
        <Button
          variant="transparent"
          text="black"
          className="mr-3 text-sm underline"
          onClick={() => console.log(123)}
        >
          Xoá ngày
        </Button>
        <Button variant="black" className="rounded px-4 py-1" onClick={handleClose}>
          Đóng
        </Button>
      </div>
    </DropDown>
  )
}

export const DatePicker = () => {
  const { ref, value, handleClose } = useMouseLeave()
  return (
    <div ref={ref} className="relative">
      <button className="mt-4 flex w-full rounded-t-md border-[1px] border-solid border-dark-gray">
        <div className="flex-1 border-r-[1px] border-solid border-dark-gray p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
          <div className="text-grey-500 text-sm">123</div>
        </div>
        <div className="flex-1 p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">CHECK-OUT</div>
          <div className="text-grey-500 text-sm">123</div>
        </div>
      </button>
      <DatePickerPopup isOpen={value} handleClose={handleClose} />
    </div>
  )
}
