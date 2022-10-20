import React, { useEffect, useRef, useState } from 'react';

import styles from './selection.module.css';

import classnames from 'classnames';

import { BiSearch } from 'react-icons/bi';
import MapDropdown from './MapDropdown';
import useFlag from 'hooks/useFlag';

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li className="m-2">
          <button className={classnames(styles.navItem)}>Chỗ ở</button>
        </li>
        <li className="m-2">
          <button className={classnames(styles.navItem)}>Trải nghiệm</button>
        </li>
        <li className="m-2">
          <button className={classnames(styles.navItem)}>Trải nghiệm trực tuyến</button>
        </li>
      </ul>
    </nav>
  );
};

interface SelectionForm {
  select: null | string;
}

const MapSelection = () => {
  const { value: isDropdown, setToggle, setClose, setOpen } = useFlag();
  const [active, setActive] = useState(false);
  return (
    <div className="relative">
      <div
        className={classnames('grow-[2]', styles.selectionInput, {
          'bg-white': active,
        })}
      >
        <label htmlFor="destination" className={classnames(styles.labelInput)}>
          Địa điểm
        </label>
        <br />
        <input
          id="destination"
          placeholder="Tìm kiếm điểm đến"
          onFocus={() => {
            setOpen();
            setActive(true);
          }}
          onBlur={() => {
            setClose();
            setActive(false);
          }}
          className={classnames(styles.customInput, {
            // active: select === 'destination',
          })}
        />
      </div>
      {isDropdown && <MapDropdown />}
    </div>
  );
};

const SelectionForm = ({ select }: SelectionForm) => {
  return (
    <form className="max-w-[800px] mx-auto">
      <div className="flex items-center border border-lightGrey bg-grey100 border-solid rounded-full">
        <MapSelection />
        <div className={`${styles.borderLine}`}></div>
        <div
          className={classnames(styles.flexInput, styles.selectionInput, {
            active: select === 'destination',
          })}
        >
          <label htmlFor="checkin" className={classnames(styles.labelInput)}>
            Nhận phòng
          </label>
          <div>Thêm ngày</div>
        </div>
        <div className={`${styles.borderLine}`}></div>
        <div
          className={classnames(styles.flexInput, styles.selectionInput, {
            active: select === 'destination',
          })}
        >
          <label htmlFor="checkout" className={classnames(styles.labelInput)}>
            Trả phòng
          </label>
          <div>Thêm ngày</div>
        </div>
        <div className={`${styles.borderLine}`}></div>
        <div
          className={classnames(
            styles.flexInput,
            styles.selectionInput,
            'flex grow-[2] items-center',
            {
              active: select === 'destination',
            },
          )}
        >
          <div className="w-1/2">
            <label htmlFor="customer" className={classnames(styles.labelInput)}>
              Khách
            </label>
            <div>Thêm khách</div>
          </div>
          <button className="pinkButton p-2 rounded-full w-1/2 flex items-center justify-around">
            <BiSearch />
            Tìm kiếm
          </button>
        </div>
      </div>
    </form>
  );
};

interface Props {
  onSet: any;
  isToggle: boolean;
  select: null | string;
}

const SelectionBoxExtend = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { onSet, isToggle } = props;

  const node = ref.current;

  const isOutsideClick = (event: any) => {
    if (!node?.contains(event.target)) {
      onSet(false);
      return;
    }
  };
  useEffect(() => {
    if (node) {
      window.addEventListener('mousedown', isOutsideClick);
    }

    return () => {
      window?.removeEventListener('mousedown', isOutsideClick);
    };
  }, [ref.current]);
  return (
    <div
      ref={ref}
      className={`${isToggle ? styles.selectionBoxExtendActive : styles.selectionBoxExtend}`}
    >
      <Nav />
      <SelectionForm select={props.select} />
    </div>
  );
};

export default SelectionBoxExtend;
