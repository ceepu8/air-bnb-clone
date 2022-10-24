import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import DateDropdown from './DateDropdown';
import useFlag from 'hooks/useFlag';
import useMouseLeave from 'hooks/useMouseLeave';

type Props = {};

const DateSelection = (props: Props) => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-2">
      <div
        className={classnames(styles.flexInput, styles.selectionInput, {
          'bg-white': !isMouseIn,
        })}
      >
        <label htmlFor="checkin" className={classnames(styles.labelInput)}>
          Nhận phòng
        </label>
        <div> Thêm ngày</div>
      </div>
      <div className={classnames(styles.flexInput, styles.selectionInput, {})}>
        <label htmlFor="checkout" className={classnames(styles.labelInput)}>
          Trả phòng
        </label>
        <div>Thêm ngày</div>
      </div>
      <DateDropdown isOpen={!isMouseIn} />
    </div>
  );
};

export default DateSelection;
