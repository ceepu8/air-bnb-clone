import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import DateDropdown from './DateDropdown';
import useFlag from 'hooks/useFlag';
import useMouseLeave from 'hooks/useMouseLeave';

type Props = {};

const DateSelection = (props: Props) => {
  const { value: isDropdown, setToggle } = useFlag();
  const [ref, isMouseIn] = useMouseLeave();
  console.log(isDropdown && isMouseIn);

  return (
    <div className="flex">
      <div
        ref={ref}
        className={classnames(styles.flexInput, styles.selectionInput, {
          'bg-white': !isMouseIn,
        })}
      >
        <label htmlFor="checkin" className={classnames(styles.labelInput)}>
          Nhận phòng
        </label>
        <div> Thêm ngày</div>
      </div>
      <div
        className={classnames(styles.flexInput, styles.selectionInput, {
          //   active: select === 'destination',
        })}
      >
        <label htmlFor="checkout" className={classnames(styles.labelInput)}>
          Trả phòng
        </label>
        <div>Thêm ngày</div>
      </div>
      {!isMouseIn && <DateDropdown />}
    </div>
  );
};

export default DateSelection;
