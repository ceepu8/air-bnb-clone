import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { BiSearch } from 'react-icons/bi';
import PeopleDropdown from './PeopleDropdown';
import useFlag from 'hooks/useFlag';

type Props = {};

const PeopleSelection = (props: Props) => {
  const { value: isDropdown, setToggle } = useFlag();
  return (
    <div
      className={classnames(styles.flexInput, styles.selectionInput, 'flex grow-[2] items-center')}
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
      {isDropdown && <PeopleDropdown />}
    </div>
  );
};

export default PeopleSelection;
