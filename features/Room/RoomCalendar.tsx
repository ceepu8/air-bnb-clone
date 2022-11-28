import { addDays, format } from 'date-fns';
import { useState } from 'react';
import { DateRange, DayPicker } from 'react-day-picker';

const RoomCalendar = () => {
  const pastMonth = new Date(2020, 10, 15);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }
  return (
    <div className="flex flex-col items-center my-6">
      <div className="w-full">
        <span className="">{footer}</span>
      </div>
      <DayPicker
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
      />
    </div>
  );
};

export default RoomCalendar;
