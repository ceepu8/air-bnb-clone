import classNames from "classnames"

type DropdownProps = {
  isOpen: boolean
  className?: string
  children?: any
}

const Dropdown = ({ isOpen, className, children }: DropdownProps) => {
  return (
    <div
      className={classNames(
        "box-shadow absolute hidden rounded-3xl bg-white p-10 shadow-black",
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
