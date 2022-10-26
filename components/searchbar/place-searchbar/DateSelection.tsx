import React, { useState } from 'react';
import useMouseLeave from 'hooks/useMouseLeave';
import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import Dropdown from '@/components/navigation/Dropdown';

type Props = {};

const pastMonth = new Date();

const DateDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-[50%] -translate-x-1/2">
      <DayPicker
        numberOfMonths={2}
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={setRange}
      />
    </Dropdown>
  );
};

const DateSelection = (props: Props) => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-2">
      <CapsuleSelection isActive={isMouseIn} labelText="Nhận phòng">
        <div> Thêm ngày</div>
      </CapsuleSelection>
      <CapsuleSelection isActive={isMouseIn} labelText="Trả phòng">
        <div> Thêm ngày</div>
      </CapsuleSelection>
      <DateDropdown isOpen={isMouseIn} />
    </div>
  );
};

export default DateSelection;
