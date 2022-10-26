import React from 'react';
import useMouseLeave from 'hooks/useMouseLeave';
import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import Dropdown from '@/components/navigation/Dropdown';

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

const PeopleDropdown = ({ isOpen }: any) => {
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] right-0 min-w-[350px]">
      {selectionList.map((selection) => (
        <Selection type={selection.type} subNote={selection.subNote} />
      ))}
    </Dropdown>
  );
};

const PeopleSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Khách">
        <div>Thêm khách</div>
      </CapsuleSelection>
      <PeopleDropdown isOpen={isMouseIn} />
    </div>
  );
};

export default PeopleSelection;
