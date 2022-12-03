import { RootState } from '@/redux/store';
import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from './components/Calendar';

const RoomCalendar = () => {
  const range = useSelector((state: RootState) => state.formReducer.date);

  let stayNights: string | number = 'Chọn ngày nhận phòng';
  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      stayNights = (range.to.getTime() - range.from.getTime()) / (1000 * 3600 * 24) + ' đêm';
      footer = (
        <p>
          {format(range.from, 'PPP')} – {format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <div className="mt-8">
      <p className="text-xl font-medium">{stayNights} tại NewApt D1</p>
      <span className="text-sm text-grey-500">{footer}</span>
      <Calendar />
    </div>
  );
};

export default RoomCalendar;
