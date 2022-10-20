import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import DateDropdown from './DateDropdown';

type Props = {};

const DateSelection = (props: Props) => {
  return (
    <div className="flex">
      {/* <div className={`${styles.borderLine}`}></div> */}
      <div
        className={classnames(styles.flexInput, styles.selectionInput, {
          //   active: select === 'destination',
        })}
      >
        <label htmlFor="checkin" className={classnames(styles.labelInput)}>
          Nhận phòng
        </label>
        <div>Thêm ngày</div>
      </div>
      {/* <div className={`${styles.borderLine}`}></div> */}
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
      <DateDropdown />
    </div>
  );
};

export default DateSelection;
