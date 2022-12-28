import classNames from "classnames"

type SelectionProps = {
  isActive: boolean
  labelText: string
  children: JSX.Element | JSX.Element[]
}

const CapsuleSelection = ({ isActive, labelText, children }: SelectionProps) => {
  return (
    <div
      className={classNames("flex flex-col rounded-full py-4 px-5", {
        "bg-white": isActive,
      })}
    >
      <label htmlFor="destination" className="label-input mb-1 block text-xs font-semibold">
        {labelText}
      </label>
      {children}
    </div>
  )
}

export default CapsuleSelection
