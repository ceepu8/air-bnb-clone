import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  border?: String;
  value?: String;
  variant?: String;
  size?: String;
  shape?: String;
  text?: String;
  icon?: ReactNode;
  children?: any;
  onClick?: (event: any) => void;
  className?: string;
}

const Button = ({
  border,
  value,
  variant,
  size,
  shape,
  text,
  icon,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const background = classNames({
    'bg-primary': variant == 'primary',
    'bg-white': variant == 'white',
    'bg-black': variant == 'black',
  });

  const textColor = classNames({
    'text-black-100': text == 'black',
  });

  const borderStyle = classNames('border');

  const shapeStyle = classNames('rounded', {
    'rounded-full': shape == 'circle',
  });

  return (
    <button
      className={classNames(
        `flex items-center justify-around text-white ${className} ${borderStyle} ${shapeStyle} ${background} ${textColor}`,
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
