import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { BiSearch } from 'react-icons/bi';
import PeopleDropdown from './PeopleDropdown';
import useMouseLeave from 'hooks/useMouseLeave';
import Button from '@/components/common/Button';

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
      <Button
        className="py-3 px-5 bg-linear-gradient-100 font-bold"
        shape="circle"
        icon={<BiSearch />}
      >
        Tìm kiếm
      </Button>
      <PeopleDropdown isOpen={!isMouseIn} />
    </div>
  );
};

export default PeopleSelection;
