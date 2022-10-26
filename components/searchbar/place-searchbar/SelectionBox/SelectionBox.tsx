import styles from './styles.module.css';

import classnames from 'classnames';

import { BiSearch } from 'react-icons/bi';
import Button from '@/components/general/Button';

interface Props {
  onSet: any;
  isToggle: boolean;
}

const SelectionBox = (props: Props) => {
  const { onSet, isToggle } = props;
  return (
    <nav
      onClick={() => onSet(true)}
      className={`max-w-[400px] mx-auto ${
        isToggle ? styles.selectionBox : styles.selectionBoxDeactive
      }`}
    >
      <div className="flex items-center justify-around m-3 py-2 px-2 shadow border-grey-200 border-solid border rounded-full">
        <button className="mx-3 text-sm">Địa điểm bất kì</button>
        <span className={classnames(styles.borderLine)}></span>
        <button className="mx-3 text-sm">Tuần bất kì</button>
        <span className={classnames(styles.borderLine)}></span>
        <button className="mx-3 text-medGrey font-thin text-sm">Thêm khách</button>
        <Button className="p-2" variant="primary" shape="circle" icon={<BiSearch />} />
      </div>
    </nav>
  );
};

export default SelectionBox;
