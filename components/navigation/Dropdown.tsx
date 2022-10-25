import classNames from 'classnames';

type DropdownProps = {
  isOpen: boolean;
  className?: string;
  children?: any;
};

const Dropdown = ({ isOpen, className, children }: DropdownProps) => {
  return (
    <div
      className={classNames(
        'absolute bg-white shadow-black box-shadow p-10 rounded-3xl hidden',
        className,
        {
          '!block': isOpen,
        },
      )}
    >
      {children}
    </div>
  );
};

export default Dropdown;
