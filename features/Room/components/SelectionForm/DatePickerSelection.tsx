import Button from '@/components/general/Button';
import Dropdown from '@/components/navigation/Dropdown';
import useMouseLeave from '@/hooks/useMouseLeave';
import RoomCalendar from '../../RoomCalendar';

const DatePickerPopup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
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
        <Button variant="black" className="px-4 py-1" onClick={handleClose}>
          Đóng
        </Button>
      </div>
    </Dropdown>
  );
};

const DatePickerSelection = () => {
  const { ref, value: isMouseIn, handleClose } = useMouseLeave<HTMLDivElement>();

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
      <DatePickerPopup isOpen={isMouseIn} handleClose={handleClose} />
    </div>
  );
};

export default DatePickerSelection;
