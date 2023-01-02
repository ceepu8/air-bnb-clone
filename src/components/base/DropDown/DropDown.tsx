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
      className={classNames(
        "absolute z-50 hidden rounded-3xl border-[1px] border-solid border-light-gray bg-white p-10 shadow-modal",
        className,
        {
          "!block": isOpen,
        }
      )}
    >
      {children}
    </div>
  )
}

export default Dropdown
