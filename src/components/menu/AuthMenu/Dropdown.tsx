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
        "absolute hidden rounded-3xl bg-white p-10 shadow-modal shadow-black",
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
