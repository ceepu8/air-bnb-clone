// import Button from '@/components/general/Button';
// import DatePickerSelection from './DatePickerSelection';
// import PeopleNumberSelection from './PeopleNumberSelection';

import { Button, LineBreak } from "@/components"
import { useState } from "react"
import { useSelector } from "react-redux"
// import { RoomInterface } from "@/interfaces"
import { DatePicker } from "./DatePicker"
import { PeoplePicker } from "./PeoplePicker"

const SelectionForm = ({ room }: any) => {
  const { date, numberNights } = useSelector((state: any) => state.roomForm)
  const { giaTien } = room || {}

  const [isCheckRoom, setIsCheckRoom] = useState<boolean>(false)

  const doCloseCheckRoom = () => setIsCheckRoom(false)
  const doOpenCheckRoom = () => setIsCheckRoom(true)

  const renderBill = () => {
    return (
      <>
        <p className="mt-4 text-center text-xs">You won't be charged yet</p>

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-sm underline">
              {giaTien}$ x {numberNights} nights
            </p>
            <p className="text-sm">{giaTien * numberNights}$</p>
          </div>
          <div className="my-4 flex justify-between">
            <p className="text-sm underline">Service fee</p>
            <p className="text-sm">0$</p>
          </div>

          <LineBreak />

          <div className="my-4 flex justify-between font-semibold">
            <p>Total</p>
            <p>{giaTien * numberNights}$</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="relative h-full">
      <div className="sticky top-[85px] ml-2 pt-6 ">
        <div className="min-h-[200px] max-w-full rounded-xl border-[0.25px] border-light-gray p-6 shadow-modal">
          <p>Add dates for prices</p>

          <DatePicker {...{ isCheckRoom, doOpenCheckRoom, doCloseCheckRoom }} />
          <PeoplePicker />

          {date?.to && date?.from && (
            <>
              <Button className="mt-4 w-full rounded-lg bg-primary py-2">Đặt phòng</Button>
              {renderBill()}
            </>
          )}

          {!date?.to && !date?.from && (
            <Button className="mt-4 w-full rounded-lg bg-primary py-2" onClick={doOpenCheckRoom}>
              Kiểm tra tình trạng phòng
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SelectionForm
