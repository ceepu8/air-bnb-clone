import classNames from 'classnames';
import { ReactNode } from 'react';

type SelectionProps = {
  isActive: boolean;
  labelText: string;
  children: JSX.Element | JSX.Element[];
};

const CapsuleSelection = ({ isActive, labelText, children }: SelectionProps) => {
  return (
    <div
      className={classNames('rounded-full py-4 px-5 flex flex-col', {
        'bg-white': isActive,
      })}
    >
      <label htmlFor="destination" className="label-input block mb-1">
        {labelText}
      </label>
      {children}
    </div>
  );
};

export default CapsuleSelection;
