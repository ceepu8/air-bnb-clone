import classNames from "classnames"
import { ReactNode } from "react"

type SelectionProps = {
  isActive: boolean
  labelText?: string
  children: ReactNode
}

const CapsuleSelection = ({ isActive = false, labelText, children, ...props }: SelectionProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-full border-[2px] border-solid border-transparent py-3 px-6 after:bg-white",
        {
          "bg-white shadow": isActive,
        }
      )}
      {...props}
    >
      {labelText && (
        <label htmlFor="destination" className="label-input mb-1 block text-xs font-semibold">
          {labelText}
        </label>
      )}

      {children}
    </div>
  )
}

export default CapsuleSelection
