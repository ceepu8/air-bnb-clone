import { Button } from "@/components"
import { SET_EXTEND } from "@/store/actions"
import classNames from "classnames"
import { BiSearch } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"

const SelectionBox = () => {
  const { isExtended } = useSelector((state: any) => state.searchbar)
  const dispatch = useDispatch()
  return (
    <nav
      onClick={() => dispatch(SET_EXTEND())}
      className={classNames(
        "absolute mx-auto max-h-full min-w-[380px] transition-all duration-[0.4s] ease-in-out",
        isExtended
          ? "invisible top-[90%] left-[17%] min-w-[520px] scale-150 opacity-0"
          : "visible top-[12%] left-[26%] z-50 scale-100 opacity-100"
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
