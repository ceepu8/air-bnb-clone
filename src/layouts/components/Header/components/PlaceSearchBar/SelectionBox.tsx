import { Button } from "@/components"
import classNames from "classnames"
import { BiSearch } from "react-icons/bi"

interface Props {
  onSet: (open: boolean) => void
  isToggle: boolean
}

const SelectionBox = (props: Props) => {
  const { onSet, isToggle } = props
  return (
    <nav
      onClick={() => onSet(true)}
      className={classNames(
        `visible absolute top-1/2 left-1/2 mx-auto max-h-full min-w-[380px] -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 transition-all duration-300`,
        {
          "hidden h-0 scale-150 opacity-0": !isToggle,
        }
      )}
    >
      <div className="flex items-center justify-around rounded-full border border-solid border-gray py-2 px-2 shadow">
        <button className="mx-3 text-sm">Địa điểm bất kì</button>
        <span className=""></span>
        <button className="mx-3 text-sm">Tuần bất kì</button>
        <span className=""></span>
        <button className="text-medGrey mx-3 text-sm font-thin">Thêm khách</button>
        <Button className="p-2" variant="primary" shape="circle" icon={<BiSearch />} />
      </div>
    </nav>
  )
}

export default SelectionBox
