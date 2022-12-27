import { Button, DropDown } from "@/components"
import { PEOPLE_SELECTION } from "@/constants"
import { useMouseLeave } from "@/hooks"
import { SET_GUEST } from "@/store/actions"
import classNames from "classnames"
import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"

const Popup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
  const dispatch = useDispatch()
  const guest = useSelector((state: any) => state.roomForm.guest)

  const handleIncrease = (keyName: string) => {
    const selectedTotal = guest[keyName]
    if (selectedTotal >= 0) {
      dispatch(
        SET_GUEST({
          ...guest,
          [keyName]: selectedTotal + 1,
        })
      )
    }
  }

  const handleDecrease = (keyName: string) => {
    const selectedTotal = guest[keyName]
    if ((selectedTotal >= 1 && keyName !== "adult") || selectedTotal > 1) {
      dispatch(
        SET_GUEST({
          ...guest,
          [keyName]: selectedTotal - 1,
        })
      )
    }
  }

  return (
    <DropDown
      isOpen={isOpen}
      className="border-grey-300 box-light-shadow min-w-full rounded-md px-4 py-6"
    >
      <div>
        {PEOPLE_SELECTION.map((each) => {
          const { name, id, note, keyName } = each
          return (
            <div key={id} className="flex items-center justify-between">
              <div className="mb-4">
                <p className="mb-0 font-semibold">{name}</p>
                <span className="text-sm">{note}</span>
              </div>
              <div className="flex items-center">
                <Button
                  shape="circle"
                  border="default"
                  borderColor="grey"
                  onClick={() => handleDecrease(keyName)}
                  className={classNames("text-dark-gray", {
                    "cursor-not-allowed border-light-gray text-light-gray":
                      guest[keyName] === 0 || guest["adult"] === 1,
                  })}
                >
                  <AiOutlineMinus className={classNames("text-dark-gray", {})} size={12} />
                </Button>
                <span className="mx-3 w-6 text-center">{guest[keyName]}</span>
                <Button
                  shape="circle"
                  border="default"
                  borderColor="grey"
                  onClick={() => handleIncrease(keyName)}
                >
                  <AiOutlinePlus className="text-dark-gray" size={12} />
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-right">
        <Button
          variant="transparent"
          text="black"
          className="text-md font-medium underline"
          onClick={handleClose}
        >
          Đóng
        </Button>
      </div>
    </DropDown>
  )
}

export const PeoplePicker = () => {
  const { ref, value, handleClose } = useMouseLeave<HTMLDivElement>()
  const guest = useSelector((state: any) => state.roomForm.guest)
  console.log(Object.values(guest))

  const total = Object.values<number>(guest).reduce((prev, curr): number => {
    return prev + curr
  }, 0)

  return (
    <div ref={ref} className="relative">
      <button className="flex w-full rounded-b-md border-[1px] border-t-[0px] border-solid border-dark-gray">
        <div className="flex-1 p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">GUESTS</div>
          <div className="text-grey-500 text-sm">{total}</div>
        </div>
      </button>
      <Popup isOpen={value} handleClose={handleClose} />
    </div>
  )
}
