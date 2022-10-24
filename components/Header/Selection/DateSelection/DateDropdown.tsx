import React, { useState } from 'react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import Dropdown from '@/components/common/Dropdown';

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

export default DateDropdown;
