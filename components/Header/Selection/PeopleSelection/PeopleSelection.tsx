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
      className={classnames(styles.flexInput, styles.selectionInput, {
        'bg-white': !isMouseIn,
      })}
    >
      <label htmlFor="customer" className={classnames(styles.labelInput)}>
        Khách
      </label>
      <div>Thêm khách</div>
      <PeopleDropdown isOpen={!isMouseIn} />
    </div>
  );
};

export default PeopleSelection;
