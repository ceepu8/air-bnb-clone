import Button from '@/components/general/Button';
import Dropdown from '@/components/navigation/Dropdown';
import useMouseLeave from '@/hooks/useMouseLeave';
import Calendar from '../components/Calendar';

import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { clearDate } from '../redux/formReducer';

const DatePickerPopup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const dispatch = useDispatch();
  const range = useSelector((state: RootState) => state.formReducer.date);

  let footer = <p>Please pick the first day.</p>;
  let startDate = <div className="text-sm text-grey-500">Add date</div>;
  let endDate = <div className="text-sm text-grey-500">Add date</div>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
      startDate = <div className="text-sm text-black-100">{format(range.from, 'MM/dd/yyyy')}</div>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')} – {format(range.to, 'PPP')}
        </p>
      );
      startDate = <div className="text-sm text-black-100">{format(range.from, 'MM/dd/yyyy')}</div>;
      endDate = <div className="text-sm text-black-100">{format(range.to, 'MM/dd/yyyy')}</div>;
    }
  }

  return (
    <Dropdown
      isOpen={isOpen}
      className="min-w-[661px] min-h-[300px] py-4 px-8 absolute -top-4 -right-8 bg-white rounded-2xl box-shadow hidden z-[2]"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold mb-0">5 đêm</p>
          <span className="text-sm leading-3 text-grey-400">{footer}</span>
        </div>

        <button className="flex max-w-[300px] w-full border-[1px] border-solid border-grey-400 rounded-md">
          <div className="flex-1 text-left p-2 border-r-[1px] border-solid border-grey-400">
            <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
            <div className="text-sm text-grey-500">{startDate}</div>
          </div>
          <div className="flex-1 text-left p-2">
            <div className="text-[8px] font-semibold leading-3">CHECK-OUT</div>
            <div className="text-sm text-grey-500">{endDate}</div>
          </div>
        </button>
      </div>
      <Calendar />

      <div className="text-right">
        <Button
          variant="transparent"
          text="black"
          className="underline mr-3 text-sm"
          onClick={() => {
            dispatch(clearDate());
          }}
        >
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
  const range = useSelector((state: RootState) => state.formReducer.date);

  let startDate = <div className="text-sm text-grey-500">Add date</div>;
  let endDate = <div className="text-sm text-grey-500">Add date</div>;
  if (range?.from) {
    if (!range.to) {
      startDate = <div className="text-sm text-black-100">{format(range.from, 'MM/dd/yyyy')}</div>;
    } else if (range.to) {
      startDate = <div className="text-sm text-black-100">{format(range.from, 'MM/dd/yyyy')}</div>;
      endDate = <div className="text-sm text-black-100">{format(range.to, 'MM/dd/yyyy')}</div>;
    }
  }

  return (
    <div ref={ref} className="relative">
      <button className="flex w-full border-[1px] mt-4 border-solid border-grey-400 rounded-t-md">
        <div className="flex-1 text-left p-2 border-r-[1px] border-solid border-grey-400">
          <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
          <div className="text-sm text-grey-500">{startDate}</div>
        </div>
        <div className="flex-1 text-left p-2">
          <div className="text-[8px] font-semibold leading-3">CHECK-OUT</div>
          <div className="text-sm text-grey-500">{endDate}</div>
        </div>
      </button>
      <DatePickerPopup isOpen={isMouseIn} handleClose={handleClose} />
    </div>
  );
};

export default DatePickerSelection;
