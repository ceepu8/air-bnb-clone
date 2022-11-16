import Button from '@/components/general/Button';
import classNames from 'classnames';
import { BiSearch } from 'react-icons/bi';

interface Props {
  onSet: any;
  isToggle: boolean;
}

const SelectionBox = (props: Props) => {
  const { onSet, isToggle } = props;
  return (
    <nav
      onClick={() => onSet(true)}
      className={classNames(
        `max-w-[400px] mx-auto absolute top-0 left-1/2 max-h-full scale-100 -translate-x-1/2 transition-all opacity-100 visible`,
        {
          'scale-150 h-0 opacity-0 hidden': !isToggle,
        },
      )}
    >
      <div className="flex items-center justify-around m-3 py-2 px-2 shadow border-grey-200 border-solid border rounded-full">
        <button className="mx-3 text-sm">Địa điểm bất kì</button>
        <span className=""></span>
        <button className="mx-3 text-sm">Tuần bất kì</button>
        <span className=""></span>
        <button className="mx-3 text-medGrey font-thin text-sm">Thêm khách</button>
        <Button className="p-2" variant="primary" shape="circle" icon={<BiSearch />} />
      </div>
    </nav>
  );
};

export default SelectionBox;
