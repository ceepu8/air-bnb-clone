// import Button from '@/components/general/Button';
// import DatePickerSelection from './DatePickerSelection';
// import PeopleNumberSelection from './PeopleNumberSelection';

import { Button, LineBreak } from "@/components"
import { DatePicker } from "./DatePicker"
import { PeoplePicker } from "./PeoplePicker"

const SelectionForm = () => {
  return (
    <div className="sticky top-[85px] ml-2 pt-6 ">
      <div className="min-h-[200px] max-w-full rounded-xl border-[0.25px] border-light-gray p-6 shadow-modal">
        <p>Add dates for prices</p>

        <DatePicker />
        <PeoplePicker />
        <Button className="mt-4 w-full rounded-lg bg-primary py-2">Đặt phòng</Button>

        <p className="mt-4 text-center text-xs">You won't be charged yet</p>

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-sm underline">28$ x 5 nights</p>
            <p className="text-sm">140$</p>
          </div>
          <div className="my-4 flex justify-between">
            <p className="text-sm underline">Service fee</p>
            <p className="text-sm">17$</p>
          </div>

          <LineBreak />

          <div className="my-4 flex justify-between font-semibold">
            <p>Total</p>
            <p>157$</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectionForm
