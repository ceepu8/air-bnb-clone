import Button from '@/components/general/Button';
import HeaderNav from '@/components/navigation/HeaderNav';
import classNames from 'classnames';
import usePlaceSearchForm from 'hooks/usePlaceSearchForm';
import { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import DateSelection from './DateSelection';
import { SearchFormProps } from './interface';
import MapSelection from './MapSelection';
import PeopleSelection from './PeopleSelection';
import { SearchFormContext } from './SearchPlaceContext';

const SelectionForm = () => {
  const { state, setState } = usePlaceSearchForm();

  return (
    <form className="max-w-[800px] mx-auto">
      <div className="grid grid-cols-6 items-center border border-grey-200 bg-grey-200 border-solid rounded-full relative">
        <SearchFormContext.Provider value={{ state, setState }}>
          <div className="col-span-2">
            <MapSelection />
          </div>
          <div className="col-span-2">
            <DateSelection />
          </div>
          <div className="col-span-2 relative">
            <PeopleSelection />
            <Button
              className="py-3 px-5 bg-linear-gradient-100 font-bold absolute right-0 mr-4 top-1/2 -translate-y-1/2"
              shape="circle"
              icon={<BiSearch />}
            >
              Tìm kiếm
            </Button>
          </div>
        </SearchFormContext.Provider>
      </div>
    </form>
  );
};

interface Props {
  onSet: any;
  isToggle: boolean;
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
      className={
        isToggle
          ? 'top-0 left-0 scale-100 w-full max-h-full opacity-100 transition-all block'
          : 'absolute -top-[20px] left-[80px] scale-[60] height-0 opacity-0 transition-all hidden'
      }
    >
      <HeaderNav />
      <SelectionForm />
    </div>
  );
};

export default SelectionBoxExtend;
