import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import useMouseLeave from 'hooks/useMouseLeave';
import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import Dropdown from '@/components/navigation/Dropdown';
import { SearchFormContext } from './SearchPlaceContext';
import { SearchFormProps } from './interface';

type DateProps = {
  isOpen: boolean;
  range: DateRange | undefined;
};

const pastMonth = new Date();

const DateDropdown = ({ isOpen, range }: DateProps) => {
  const context = useContext(SearchFormContext);

  return (
    <Dropdown isOpen={isOpen} className="top-[110%] left-[50%] -translate-x-1/2">
      <DayPicker
        numberOfMonths={2}
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={(value: DateRange) => {
          context?.setState?.((state: SearchFormProps) => {
            return {
              ...state,
              date: {
                from: value?.from,
                to: value?.to,
              },
            };
          });
        }}
      />
    </Dropdown>
  );
};

const DateSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  const context = useContext(SearchFormContext);

  return (
    <div ref={ref} className="grid grid-cols-2">
      <CapsuleSelection isActive={isMouseIn} labelText="Nhận phòng">
        <div>
          {context?.state.date
            ? context?.state.date?.from
              ? format(context?.state.date?.from, 'PP')
              : 'Thêm ngày'
            : 'Thêm ngày'}
        </div>
      </CapsuleSelection>
      <CapsuleSelection isActive={isMouseIn} labelText="Trả phòng">
        <div>
          {context?.state.date
            ? context?.state.date?.to
              ? format(context?.state.date?.to, 'PP')
              : 'Thêm ngày'
            : 'Thêm ngày'}
        </div>
      </CapsuleSelection>
      <DateDropdown isOpen={isMouseIn} range={context?.state.date} />
    </div>
  );
};

export default DateSelection;
