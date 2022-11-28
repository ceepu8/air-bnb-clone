import Button from '@/components/general/Button';
import Dropdown from '@/components/navigation/Dropdown';
import useMouseLeave from '@/hooks/useMouseLeave';
import classNames from 'classnames';
import RoomCalendar from './RoomCalendar';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { PEOPLE_SELECTION } from '@/constants/room';

const DatePickerPopup = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Dropdown
      isOpen={isOpen}
      className="min-w-[661px] min-h-[300px] py-4 px-8 absolute -top-4 -right-8 bg-white rounded-2xl box-shadow hidden z-[2]"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold mb-0">5 đêm</p>
          <span className="text-sm leading-3 text-grey-400">3 thg 4 2023 - 8 thg 4 2023</span>
        </div>

        <button className="flex max-w-[300px] w-full border-[1px] border-solid border-grey-400 rounded-md">
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
      <RoomCalendar />

      <div className="text-right">
        <Button variant="transparent" text="black" className="underline mr-3 text-sm">
          Xoá ngày
        </Button>
        <Button variant="black" className="px-4 py-1">
          Đóng
        </Button>
      </div>
    </Dropdown>
  );
};

const PeopleNumberPopup = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Dropdown
      isOpen={isOpen}
      className="rounded-md min-w-full px-4 py-6 border-grey-300 box-light-shadow"
    >
      <div>
        {PEOPLE_SELECTION.map((each) => {
          const { name, id, note } = each;
          return (
            <div key={id} className="flex items-center justify-between">
              <div className="mb-4">
                <p className="font-semibold">{name}</p>
                <span className="text-sm">{note}</span>
              </div>
              <div className="flex items-center">
                <Button shape="circle" border="default" borderColor="grey">
                  <AiOutlineMinus className="text-grey-500" size={12} />
                </Button>
                <span className="mx-3">1</span>
                <Button shape="circle" border="default" borderColor="grey">
                  <AiOutlinePlus className="text-grey-500" size={12} />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-right">
        <Button variant="transparent" text="black" className="underline text-md font-medium">
          Đóng
        </Button>
      </div>
    </Dropdown>
  );
};

const PeopleNumberSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
      <button className="flex w-full border-[1px] border-solid border-t-[0px] border-grey-400 rounded-b-md">
        <div className="flex-1 text-left p-2">
          <div className="text-[8px] font-semibold leading-3">GUESTS</div>
          <div className="text-sm text-grey-500">1 guest</div>
        </div>
      </button>
      <PeopleNumberPopup isOpen={isMouseIn} />
    </div>
  );
};

const DatePickerSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div ref={ref} className="relative">
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
      <DatePickerPopup isOpen={isMouseIn} />
    </div>
  );
};

const SelectionForm = () => {
  return (
    <div className="pt-6 ml-6 sticky top-[85px]">
      <div className="max-w-full min-h-[200px] box-shadow rounded-md border-grey-300 border-[1px] p-6">
        <p>Add dates for prices</p>

        <DatePickerSelection />

        <PeopleNumberSelection />

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
