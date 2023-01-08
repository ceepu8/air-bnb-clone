import cn from "classnames"
import { forwardRef, LegacyRef, MouseEvent, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

import Spin from "../Spin"

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
  variant?: "primary" | "secondary" | "danger" | "outline" | "light" | "subtle"
  size?: "tiny" | "small" | "medium" | "large" //  24 / 32 / 40 / 48 px
  bold?: boolean
  clean?: boolean
  fullWidth?: boolean
  loading?: boolean
  type?: "button" | "submit" | "reset" | undefined
  shape?: "rectangle" | "circle" | undefined
  disabled?: boolean
  label?: string
  leftIcon?: ReactNode
  shadow?: boolean
  bordered?: boolean
}

const CustomButton = forwardRef(
  (
    {
      size = "medium",
      type = "button",
      disabled,
      label,
      loading,
      shape = "rectangle",
      variant = "primary",
      fullWidth = false,
      className,
      onClick,
      bold = true,
      leftIcon,
      shadow = true,
      clean = false,
      bordered = false,
      ...props
    }: ButtonProps,
    ref: LegacyRef<HTMLButtonElement> | undefined
  ) => {
    const { children }: any = props

    const sizeClassNames = cn({
      "h-6 text-xs": size === "tiny",
      "h-8 text-sm leading-[18px]": size === "small",
      "h-10 text-sm leading-[18px]": size === "medium",
      "h-12 text-sm leading-[18px]": size === "large",
    })

    const rootClassnames = !clean
      ? cn(
          "px-4 select-none transition-all duration-200 ease-linear inline-block focus:outline-none",
          {
            "bg-white text-primary border border-solid border-light-blue": variant === "outline",
            "bg-secondary text-white  hover:bg-secondary-600": disabled || variant === "secondary",
            "bg-white text-black font-normal border-primary": variant === "subtle",
            "bg-primary text-white hover:bg-primary-600": variant === "primary",
            "bg-white-blue text-primary": variant === "light",
            "border-[1px] border-dark-gray p-2": bordered,
            "opacity-50 cursor-not-allowed": disabled,
            "rounded-full": shape === "circle",
            "shadow-drop": shadow,
            "w-full": fullWidth,
          },
          className
        )
      : className

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={twMerge(cn(sizeClassNames, rootClassnames))}
        onClick={onClick}
        {...props}
      >
        <div className={cn("flex-center w-full gap-2", { "font-semibold": bold })}>
          {loading && (
            <div className={cn(variant === "primary" ? "text-white" : "text-primary")}>
              <Spin size={22} />
            </div>
          )}
          {!loading && leftIcon && <div>{leftIcon}</div>}
          {label || children}
        </div>
      </button>
    )
  }
)

export default CustomButton
