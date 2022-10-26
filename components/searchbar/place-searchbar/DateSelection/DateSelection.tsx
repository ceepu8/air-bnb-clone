import React from 'react';
import classnames from 'classnames';
import DateDropdown from './DateDropdown';
import useMouseLeave from 'hooks/useMouseLeave';

type Props = {};

const DateSelection = (props: Props) => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-2">
      <div
        className={classnames('selection-input', {
          'bg-white': isMouseIn,
        })}
      >
        <label htmlFor="checkin" className="label-input">
          Nhận phòng
        </label>
        <div> Thêm ngày</div>
      </div>
      <div className="selection-input">
        <label htmlFor="checkout" className="label-input">
          Trả phòng
        </label>
        <div>Thêm ngày</div>
      </div>
      <DateDropdown isOpen={isMouseIn} />
    </div>
  );
};

export default DateSelection;
