import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import useMouseLeave from 'hooks/useMouseLeave';
import CapsuleSelection from '@/components/data-entry/CapsuleSelection';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import Dropdown from '@/components/navigation/Dropdown';
import { SearchFormContext } from './SearchPlaceContext';
import usePlaceSearchForm from 'hooks/usePlaceSearchForm';
import { PEOPLE_SELECTION_LIST } from '@/constants/place-searchbar';

type SelectionProps = {
  type: string;
  subNote: string;
  code: string;
};

const Selection = ({ type, subNote, code }: SelectionProps) => {
  const { handleIncreasePeople, handleDecreasePeople } = usePlaceSearchForm(code);
  const context = useContext(SearchFormContext);

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
        <p className="input-field max-w-[10px] m-4 text-xl">
          {context?.state.people[code as keyof typeof context.state.people]}
        </p>
        <button type="button" onClick={handleIncreasePeople}>
          <AiFillPlusCircle className="text-[40px] text-medGrey" />
        </button>
      </div>
    </div>
  );
};

const PeopleDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Dropdown isOpen={isOpen} className="top-[110%] right-0 min-w-[350px]">
      {PEOPLE_SELECTION_LIST.map((selection) => {
        return (
          <Selection code={selection.code} type={selection.type} subNote={selection.subNote} />
        );
      })}
    </Dropdown>
  );
};

const PeopleSelection = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();
  const context = useContext(SearchFormContext);

  const calcTotal = (object: any) => {
    const res = Object.keys(object).reduce((result, key) => {
      result += object[key];
      return result;
    }, 0);

    return res;
  };
  return (
    <div ref={ref}>
      <CapsuleSelection isActive={isMouseIn} labelText="Khách">
        <div>
          {calcTotal(context?.state.people) === 0 ? 'Thêm khách' : calcTotal(context?.state.people)}
        </div>
      </CapsuleSelection>
      <PeopleDropdown isOpen={isMouseIn} />
    </div>
  );
};

export default PeopleSelection;
