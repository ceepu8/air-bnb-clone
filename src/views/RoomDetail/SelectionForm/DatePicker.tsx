import { Button, DropDown } from "@/components"
import { useMouseLeave } from "@/hooks"
import { CLEAR_DATE } from "@/store/actions"
import { format } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { Calendar } from "../Calendar"

const Popup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const date = useSelector((state: any) => state.roomForm.date)
  const dispatch = useDispatch()
  return (
    <DropDown
      isOpen={isOpen}
      className="absolute -top-[50px] -right-8 hidden min-h-[300px] min-w-[661px] rounded-2xl bg-white py-4 px-8"
    >
      <div className="relative mt-8 flex items-center justify-between">
        <Calendar />

        <button className="absolute top-0 right-0 flex w-full max-w-[315px] rounded-md border-[1px] border-solid border-dark-gray">
          <div className="flex-1 border-r-[1px] border-solid border-dark-gray p-2 text-left">
            <div className="text-[8px] font-bold leading-3">CHECK-IN</div>
            <div className="text-sm">
              {date?.from ? format(date?.from, "dd/MM/yyyy") : "Thêm ngày"}
            </div>
          </div>
          <div className="flex-1 p-2 text-left">
            <div className="text-[8px] font-bold leading-3">CHECK-OUT</div>
            <div className="text-sm">{date?.to ? format(date?.to, "dd/MM/yyyy") : "Thêm ngày"}</div>
          </div>
        </button>
      </div>

      <div className="text-right">
        <Button
          variant="transparent"
          text="black"
          className="mr-3 text-sm underline"
          onClick={() => dispatch(CLEAR_DATE())}
        >
          Xoá ngày
        </Button>
        <Button variant="black" className="rounded px-4 py-1" onClick={handleClose}>
          Đóng
        </Button>
      </div>
    </DropDown>
  )
}

export const DatePicker = ({ isCheckRoom }: { isCheckRoom: boolean }) => {
  const { ref, value, handleClose } = useMouseLeave<HTMLDivElement>()
  const date = useSelector((state: any) => state.roomForm.date)
  return (
    <div ref={ref} className="relative">
      <button className="mt-4 flex w-full rounded-t-md border-[1px] border-solid border-dark-gray">
        <div className="flex-1 border-r-[1px] border-solid border-dark-gray p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">CHECK-IN</div>
          <div className="text-grey-500 text-sm">
            {date?.from ? format(date?.from, "dd/MM/yyyy") : "Thêm ngày"}
          </div>
        </div>
        <div className="flex-1 p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">CHECK-OUT</div>
          <div className="text-grey-500 text-sm">
            {date?.to ? format(date?.to, "dd/MM/yyyy") : "Thêm ngày"}
          </div>
        </div>
      </button>
      <Popup isOpen={value || isCheckRoom} handleClose={handleClose} />
    </div>
  )
}
