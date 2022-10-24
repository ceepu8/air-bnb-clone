import { useEffect, useRef } from 'react';

import styles from './styles.module.css';

import classnames from 'classnames';

import { BiSearch } from 'react-icons/bi';
import MapSelection from './MapSelection/MapSelection';
import DateSelection from './DateSelection/DateSelection';
import PeopleSelection from './PeopleSelection/PeopleSelection';
import Button from '@/components/common/Button';

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li className="m-2">
          <button className={classnames(styles.navItem)}>Chỗ ở</button>
        </li>
        <li className="m-2">
          <button className={classnames(styles.navItem)}>Trải nghiệm</button>
        </li>
        <li className="m-2">
          <button className={classnames(styles.navItem)}>Trải nghiệm trực tuyến</button>
        </li>
      </ul>
    </nav>
  );
};

interface SelectionForm {
  select: null | string;
}

const SelectionForm = ({ select }: SelectionForm) => {
  return (
    <form className="max-w-[800px] mx-auto">
      <div className="grid grid-cols-6 items-center border border-grey-200 bg-grey-200 border-solid rounded-full relative">
        <div className="col-span-2">
          <MapSelection />
        </div>
        <div className="col-span-2">
          <DateSelection />
        </div>
        <div className="col-span-1">
          <PeopleSelection />
        </div>
        <div className="col-span-1">
          <Button
            className="py-3 px-5 bg-linear-gradient-100 font-bold"
            shape="circle"
            icon={<BiSearch />}
          >
            Tìm kiếm
          </Button>
        </div>
      </div>
    </form>
  );
};

interface Props {
  onSet: any;
  isToggle: boolean;
  select: null | string;
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
      className={`${isToggle ? styles.selectionBoxExtendActive : styles.selectionBoxExtend}`}
    >
      <Nav />
      <SelectionForm select={props.select} />
    </div>
  );
};

export default SelectionBoxExtend;
