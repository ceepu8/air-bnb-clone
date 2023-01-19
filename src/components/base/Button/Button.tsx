import cn from "classnames"
import { MouseEvent, ReactNode, useRef } from "react"
import { twMerge } from "tailwind-merge"

import { useGetMouseEvent } from "@/hooks"

import Spin from "../Spin"

interface ButtonProps {
  label?: string
  className?: string
  type?: "button" | "submit" | "reset"
  shape?: "rectangle" | "circle" | "square"
  variant?: "primary" | "secondary" | "outline" | "light"
  size?: "tiny" | "small" | "medium" | "large" //  24 / 32 / 40 / 48 px
  loading?: boolean
  bordered?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  isJusIcon?: boolean
  fullWidth?: boolean
  disabled?: boolean
  shadow?: boolean
  clean?: boolean
  bold?: boolean
  leftIcon?: ReactNode
  children?: ReactNode | string
}

const Button = ({
  label = "",
  className = "",
  type = "button",
  shape = "rectangle",
  variant = "primary",
  size = "medium",
  loading = false,
  bordered = true,
  onClick = () => {},
  isJusIcon = false,
  fullWidth = true,
  disabled = false,
  shadow = true,
  clean = false,
  bold = true,
  leftIcon,
  children,
  ...props
}: ButtonProps) => {
  const ref = useRef<any>() // any every where
  const { mouseX, mouseY } = useGetMouseEvent(ref)

  const sizeClassNames = cn({
    "h-8 text-xs leading-4": size === "tiny",
    "h-10 text-sm leading-[18px]": size === "small",
    "h-12 text-base leading-[18px]": size === "medium",
    "h-14 text-base leading-[18px]": size === "large",
    "!w-8 h-8 leading-8": size === "tiny" && shape === "circle",
  })

  const rootClassnames = !clean
    ? cn(
        "inline-block touch-manipulation select-none rounded-lg border-transparent px-6",
        "transition-all duration-200 ease-linear focus:outline-none",
        {
          "border-black bg-white text-black hover:bg-white-gray": variant === "outline",
          "bg-white text-black hover:bg-white-gray underline": variant === "light",
          "bg-black-gray text-white hover:bg-black": variant === "secondary",
          "!w-8 h-8 rounded-full border-dark-gray p-2": isJusIcon,
          "rounded-full border-dark-gray p-2": shape === "circle",
          "cursor-not-allowed opacity-50": disabled,
          "border border-solid": bordered,
          "px-4": size === "small",
          "font-semibold": bold,
          "shadow-drop": shadow,
          "w-full": fullWidth,
        },
        className
      )
    : className

  const rootStyle =
    variant === "primary" && !clean
      ? {
          backgroundImage: "var(--linear-gradient-button)",
          backgroundPosition: `calc((100 - ${mouseX}) * 1%) calc((100 - ${mouseY}) * 1%)`,
          backgroundSize: "200% 200%",
          color: "white",
        }
      : {}

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={twMerge(cn(sizeClassNames, rootClassnames))}
      onClick={onClick}
      style={rootStyle}
      {...props}
    >
      <div className={cn("flex-center w-full gap-2")}>
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

export default Button
