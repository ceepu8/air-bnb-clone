import styles from './styles.module.css';

import classnames from 'classnames';

import { BiSearch } from 'react-icons/bi';
import Button from '@/components/common/Button';

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
      <div
        className={classnames(
          'flex items-center justify-around m-3 py-2 px-2 shadow',
          styles.roundBorder,
        )}
      >
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
