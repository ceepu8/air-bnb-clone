import React, { Dispatch, SetStateAction, useState } from 'react';
import useMouseLeave from 'hooks/useMouseLeave';
import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import Dropdown from '@/components/navigation/Dropdown';

type DateProps = {
  isOpen: boolean;
  range: DateRange | undefined;
  handleSetRange: Dispatch<SetStateAction<any>>;
};

const pastMonth = new Date();

const DateDropdown = ({ isOpen, range, handleSetRange }: DateProps) => {
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-[50%] -translate-x-1/2">
      <DayPicker
        numberOfMonths={2}
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={handleSetRange}
      />
    </Dropdown>
  );
};

const DateSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  const defaultSelected: any = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };

  const [range, setRange] = useState<any>(defaultSelected);

  return (
    <div ref={ref} className="grid grid-cols-2">
      <CapsuleSelection isActive={isMouseIn} labelText="Nhận phòng">
        <div>{range ? (range?.from ? format(range?.from, 'PP') : 'Thêm ngày') : 'Thêm ngày'}</div>
      </CapsuleSelection>
      <CapsuleSelection isActive={isMouseIn} labelText="Trả phòng">
        <div>{range ? (range?.to ? format(range?.to, 'PP') : 'Thêm ngày') : 'Thêm ngày'}</div>
      </CapsuleSelection>
      <DateDropdown isOpen={isMouseIn} range={range} handleSetRange={setRange} />
    </div>
  );
};

export default DateSelection;
