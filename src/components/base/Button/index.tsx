import classNames from "classnames"
import { ReactNode } from "react"

interface ButtonProps {
  border?: String
  borderColor?: String
  value?: String
  variant?: String
  size?: String
  shape?: String
  text?: String
  icon?: ReactNode
  children?: any
  disabled?: boolean
  onClick?: (event: any) => void
  className?: string
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
    "bg-primary": variant === "primary",
    "bg-white": variant === "white",
    "bg-black": variant === "black",
    transparent: variant === "transparent",
  })

  const textColor = classNames({
    "text-black-100": text === "black",
    "text-white": !text,
  })

  const borderStyle = classNames({
    "border-[1px] border-dark-gray p-2": border === "default",
    none: !border,
  })

  const shapeStyle = classNames({
    "rounded-full": shape === "circle",
  })

  const borderColorStyle = classNames({
    "border-dark-gray": borderColor === "grey",
  })

  return (
    <button
      className={classNames(
        `${className} ${borderStyle} ${shapeStyle} ${background} ${textColor} ${borderColorStyle}`,
        {}
      )}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

export default Button
