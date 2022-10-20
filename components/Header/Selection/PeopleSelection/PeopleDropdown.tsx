import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

type SelectionProps = {
  type: string;
  subNote: string;
};

const Selection = ({ type, subNote }: SelectionProps) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <div>
        <p className="text-lg font-bold">{type}</p>
        <p className="text-medGrey">{subNote}</p>
      </div>

      <div className="flex items-center justify-between">
        <button>
          <AiFillMinusCircle className="text-[40px] text-medGrey" />
        </button>
        <p className="input-field max-w-[10px] m-4 text-xl">0</p>
        <button>
          <AiFillPlusCircle className="text-[40px] text-medGrey" />
        </button>
      </div>
    </div>
  );
};

const selectionList = [
  {
    type: 'Người lớn',
    subNote: 'Từ 13 tuổi trở lên',
  },
  {
    type: 'Trẻ em',
    subNote: 'Độ tuổi 2-12',
  },
  {
    type: 'Em bé',
    subNote: 'Dưới 2 tuổi',
  },
];

const PeopleDropdown = () => {
  return (
    <div className={classnames(styles.dropdown, styles.peopleDropdown, 'rounded-3xl')}>
      {selectionList.map((selection) => (
        <Selection type={selection.type} subNote={selection.subNote} />
      ))}
    </div>
  );
};

export default PeopleDropdown;
