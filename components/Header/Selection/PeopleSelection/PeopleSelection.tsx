import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { BiSearch } from 'react-icons/bi';
import PeopleDropdown from './PeopleDropdown';
import useMouseLeave from 'hooks/useMouseLeave';

type Props = {};

const PeopleSelection = (props: Props) => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={classnames(styles.flexInput, styles.selectionInput, 'flex grow-[2] items-center', {
        'bg-white': !isMouseIn,
      })}
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
      <PeopleDropdown isOpen={!isMouseIn} />
    </div>
  );
};

export default PeopleSelection;
