import { useMouseLeave } from "@/hooks"
import cn from "classnames"
import React, { ReactNode } from "react"
import { MdOutlineClose } from "react-icons/md"
import Button from "../Button"

type Props = {
  title?: string
  okText?: string
  cancleText?: string
  children?: ReactNode
  onConfirm?: () => void
  onCancle?: () => void
}

export const PopConfirm = ({
  title,
  okText = "Yes",
  cancleText = "No",
  onConfirm = () => {},
  onCancle = () => {},
  children,
}: Props) => {
  const { ref, value: isMouseIn, handleClose } = useMouseLeave<HTMLDivElement>()

  return (
    <div ref={ref} className="relative w-fit">
      {children}
      <div
        className={cn(
          "absolute top-0 left-full z-50 mt-3 ml-6 hidden min-w-[240px] -translate-y-1/2 rounded-xl border-[1px] border-solid border-light-gray bg-white px-3 py-3 shadow-modal",
          {
            "!block": isMouseIn,
          }
        )}
      >
        <div className="text-right">
          <Button clean isJustIcon onClick={handleClose} size="small">
            <MdOutlineClose />
          </Button>
        </div>
        <p className="font-semibold">{title}</p>
        <div className="mt-4 text-right">
          <Button
            className="mr-2"
            variant="outline"
            size="tiny"
            fullWidth={false}
            onClick={() => {
              onConfirm()
              handleClose()
            }}
          >
            {okText}
          </Button>
          <Button
            variant="secondary"
            size="tiny"
            fullWidth={false}
            onClick={() => {
              handleClose()
              onCancle()
            }}
          >
            {cancleText}
          </Button>
        </div>
      </div>
    </div>
  )
}
