import classNames from "classnames"

type SelectionProps = {
  isActive: boolean
  labelText: string
  children: JSX.Element | JSX.Element[]
}

const CapsuleSelection = ({ isActive, labelText, children }: SelectionProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col rounded-full border-[2px] border-solid border-transparent py-3 px-6 after:bg-white",
        {
          "bg-white shadow": isActive,
        }
      )}
    >
      <label htmlFor="destination" className="label-input mb-1 block text-xs font-semibold">
        {labelText}
      </label>
      {children}
    </div>
  )
}

export default CapsuleSelection
