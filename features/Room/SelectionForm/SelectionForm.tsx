import Button from '@/components/general/Button';
import DatePickerSelection from './DatePickerSelection';
import PeopleNumberSelection from './PeopleNumberSelection';

const SelectionForm = () => {
  return (
    <div className="pt-6 ml-2 sticky top-[85px]">
      <div className="max-w-full min-h-[200px] box-light-shadow rounded-xl border-grey-100 border-[0.25px] p-6">
        <p>Add dates for prices</p>

        <DatePickerSelection />
        <PeopleNumberSelection />
        <Button className="bg-linear-gradient-100 py-2 rounded-lg mt-4 w-full">Đặt phòng</Button>

        <p className="text-xs text-center mt-4">You won't be charged yet</p>

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="text-sm underline">28$ x 5 nights</p>
            <p className="text-sm">140$</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="text-sm underline">Service fee</p>
            <p className="text-sm">17$</p>
          </div>

          <div className="w-full h-[1px] bg-grey-300"></div>

          <div className="flex justify-between my-4 font-semibold">
            <p>Total</p>
            <p>157$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionForm;
