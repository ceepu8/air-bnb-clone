import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import PeopleDropdown from './PeopleDropdown';
import useMouseLeave from 'hooks/useMouseLeave';

type Props = {};

const PeopleSelection = (props: Props) => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={classnames('selection-input', {
        'bg-white': isMouseIn,
      })}
    >
      <label htmlFor="customer" className="label-input">
        Khách
      </label>
      <div>Thêm khách</div>
      <PeopleDropdown isOpen={isMouseIn} />
    </div>
  );
};

export default PeopleSelection;
