import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  border?: String;
  borderColor?: String;
  value?: String;
  variant?: String;
  size?: String;
  shape?: String;
  text?: String;
  icon?: ReactNode;
  children?: any;
  disabled?: boolean;
  onClick?: (event: any) => void;
  className?: string;
}

const Button = ({
  border,
  borderColor,
  value,
  variant,
  size,
  shape,
  text,
  icon,
  disabled,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const background = classNames({
    'bg-primary': variant == 'primary',
    'bg-white': variant == 'white',
    'bg-black-100': variant == 'black',
    transparent: (variant = 'transparent'),
  });

  const textColor = classNames({
    'text-black-100': text == 'black',
    'text-white': !text,
  });

  const borderStyle = classNames({
    'border-[1px] border-grey-300 p-2': border == 'default',
    none: !border,
  });

  const shapeStyle = classNames('rounded', {
    'rounded-full': shape == 'circle',
  });

  const borderColorStyle = classNames({
    'border-grey-300': borderColor === 'grey',
  });

  return (
    <button
      className={classNames(
        `${className} ${borderStyle} ${shapeStyle} ${background} ${textColor} ${borderColorStyle}`,
        {},
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
