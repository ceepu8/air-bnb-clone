import React, { Dispatch, SetStateAction, useState } from 'react';
import useMouseLeave from 'hooks/useMouseLeave';
import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import Dropdown from '@/components/navigation/Dropdown';

type SelectionProps = {
  type: string;
  subNote: string;
  code: string;
  number: number;
  handleSelect: Dispatch<SetStateAction<any>>;
};

const Selection = ({ type, subNote, code, number, handleSelect }: SelectionProps) => {
  const handleIncreasePeople = () => {
    handleSelect((state) => {
      return {
        ...state,
        [code]: state[code] + 1,
      };
    });
  };

  const handleDecreasePeople = () => {
    handleSelect((state) => {
      return {
        ...state,
        [code]: state[code] - 1,
      };
    });
  };
  return (
    <div className="flex items-center justify-between mt-5">
      <div>
        <p className="text-lg font-bold">{type}</p>
        <p className="text-medGrey">{subNote}</p>
      </div>

      <div className="flex items-center justify-between">
        <button type="button" onClick={handleDecreasePeople}>
          <AiFillMinusCircle className="text-[40px] text-medGrey" />
        </button>
        <p className="input-field max-w-[10px] m-4 text-xl">{number}</p>
        <button type="button" onClick={handleIncreasePeople}>
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
    code: 'adult',
  },
  {
    type: 'Trẻ em',
    subNote: 'Độ tuổi 2-12',
    code: 'children',
  },
  {
    type: 'Em bé',
    subNote: 'Dưới 2 tuổi',
    code: 'toddler',
  },
];

const PeopleDropdown = ({
  isOpen,
  data,
  handleSelect,
}: {
  isOpen: boolean;
  data: any;
  handleSelect: Dispatch<SetStateAction<any>>;
}) => {
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] right-0 min-w-[350px]">
      {selectionList.map((selection) => {
        return (
          <Selection
            number={data[selection.code]}
            code={selection.code}
            type={selection.type}
            subNote={selection.subNote}
            handleSelect={handleSelect}
          />
        );
      })}
    </Dropdown>
  );
};

const PeopleSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  const [value, setValue] = useState<any>({
    adult: 0,
    children: 0,
    toddler: 0,
  });

  const calcTotal = (object: Object) => {
    const res = Object.keys(object).reduce((result, key) => {
      result += value[key];
      return result;
    }, 0);

    return res;
  };
  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Khách">
        <div>{calcTotal(value) === 0 ? 'Thêm khách' : calcTotal(value)}</div>
      </CapsuleSelection>
      <PeopleDropdown isOpen={isMouseIn} data={value} handleSelect={setValue} />
    </div>
  );
};

export default PeopleSelection;
