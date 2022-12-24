import { Button, DropDown } from "@/components"
import { PEOPLE_SELECTION } from "@/constants"
import { useMouseLeave } from "@/hooks"
import classNames from "classnames"
import React from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

const Popup = ({ isOpen, handleClose }: { isOpen: boolean; handleClose: () => void }) => {
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
                  // onClick={() => handleDecrease(keyName as keyof Guest)}
                  // disabled={state[keyName as keyof Guest] === 0}
                  className={classNames("text-dark-gray", {
                    // 'text-grey-300 border-grey-200': state[keyName as keyof Guest] === 0,
                  })}
                >
                  <AiOutlineMinus
                    className={classNames("text-dark-gray", {
                      // 'text-grey-300': state[keyName as keyof Guest] === 0,
                    })}
                    size={12}
                  />
                </Button>
                {/* <span className="mx-3">{state[keyName as keyof Guest]}</span> */}
                <span className="mx-3">1</span>
                <Button
                  shape="circle"
                  border="default"
                  borderColor="grey"
                  // onClick={() => handleIncrease(keyName as keyof Guest)}
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
  const { ref, value, handleClose } = useMouseLeave()

  return (
    <div ref={ref} className="relative">
      <button className="flex w-full rounded-b-md border-[1px] border-t-[0px] border-solid border-dark-gray">
        <div className="flex-1 p-2 text-left">
          <div className="text-[8px] font-semibold leading-3">GUESTS</div>
          <div className="text-grey-500 text-sm">1 guest</div>
        </div>
      </button>
      <Popup isOpen={value} handleClose={handleClose} />
    </div>
  )
}
