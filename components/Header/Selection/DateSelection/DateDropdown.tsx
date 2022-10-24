import React, { useState } from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

type Props = {};

const pastMonth = new Date();

const DateDropdown = ({ isOpen }: { isOpen: boolean }) => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <div
      className={classnames(styles.dropdown, styles.dateDropdown, 'rounded-3xl hidden', {
        '!block': isOpen,
      })}
    >
      <DayPicker
        numberOfMonths={2}
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={setRange}
      />
    </div>
  );
};

export default DateDropdown;
