import React, { useState } from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

type Props = {};

const pastMonth = new Date(2020, 10, 15);

const DateDropdown = (props: Props) => {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <div className={classnames(styles.dropdown, styles.dateDropdown, 'rounded-3xl')}>
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
