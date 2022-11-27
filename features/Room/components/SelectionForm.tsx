import Button from '@/components/general/Button';

const DatePickerPopup = () => {
  return (
    <div
      style={{ width: '600px' }}
      className="w-[600px] min-h-[300px] py-4 px-6 inline-block absolute top-0 right-0 bg-white rounded-lg box-shadow "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold">5 đêm</p>
          <span className="text-sm leading-3 text-grey-400">3 thg 4 2023 - 8 thg 4 2023</span>
        </div>

        <button className="flex w-full border-[1px] mt-4 border-solid border-grey-400 rounded-md">
          <div className="flex-1 text-left p-2 border-r-[1px] border-solid border-grey-400">
            <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
            <div className="text-sm text-grey-500">Add date</div>
          </div>
          <div className="flex-1 text-left p-2">
            <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
            <div className="text-sm text-grey-500">Add date</div>
          </div>
        </button>
      </div>
    </div>
  );
};

const SelectionForm = () => {
  return (
    <div className="pt-6 ml-6 sticky top-[85px]">
      <div className="max-w-full min-h-[200px] box-shadow rounded-md border-grey-300 border-[1px] p-6">
        <p>Add dates for prices</p>
        <div className="relative">
          <button className="flex w-full border-[1px] mt-4 border-solid border-grey-400 rounded-t-md">
            <div className="flex-1 text-left p-2 border-r-[1px] border-solid border-grey-400">
              <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
              <div className="text-sm text-grey-500">Add date</div>
            </div>
            <div className="flex-1 text-left p-2">
              <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
              <div className="text-sm text-grey-500">Add date</div>
            </div>
          </button>
          <DatePickerPopup />
        </div>
        <button className="flex w-full border-[1px] border-solid border-t-[0px] border-grey-400 rounded-b-md">
          <div className="flex-1 text-left p-2">
            <div className="text-[8px] font-semibold leading-3">GUESTS</div>
            <div className="text-sm text-grey-500">1 guest</div>
          </div>
        </button>
        <Button className="bg-linear-gradient-100 py-2 rounded-lg mt-4 w-full">Reserve</Button>
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
