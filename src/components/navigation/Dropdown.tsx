import classNames from "classnames"
import { ReactNode } from "react"

type DropdownProps = {
  isOpen: boolean
  className?: string
  children?: ReactNode
}

const Dropdown = ({ isOpen, className, children }: DropdownProps) => {
  return (
    <div
      className={classNames("absolute hidden rounded-3xl bg-white p-10 shadow", className, {
        "!block": isOpen,
      })}
    >
      {children}
    </div>
  )
}

export default Dropdown
