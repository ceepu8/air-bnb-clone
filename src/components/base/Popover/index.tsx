import { useMouseLeave } from "@/hooks"
import cn from "classnames"
import React, { ReactNode } from "react"
import { MdOutlineClose } from "react-icons/md"
import Button from "../Button"

type Props = {
  placement?: "bottom" | "bottomLeft" | "bottomRight"
  title?: string
  hasClose?: boolean
  content?: ReactNode
  children?: ReactNode
}

export const Popover = ({
  placement = "bottom",
  title = "",
  hasClose = false,
  content,
  children,
}: Props) => {
  const position = {
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    bottomRight: "top-full right-0 mt-2",
    bottomLeft: "top-full left-0 mt-2",
  }[placement]

  const { ref, value: isMouseIn, handleClose } = useMouseLeave<HTMLDivElement>()

  return (
    <div ref={ref} className="relative w-fit">
      {children}
      <div
        className={cn(
          "absolute z-50 hidden min-w-[240px] rounded-xl border-[1px] border-solid border-light-gray bg-white px-3 py-3 shadow-modal",
          position,
          {
            "!block": isMouseIn,
          }
        )}
      >
        {hasClose && (
          <div className="text-right">
            <Button clean isJustIcon onClick={handleClose} size="small">
              <MdOutlineClose />
            </Button>
          </div>
        )}
        {title && <h1>{title}</h1>}
        {content}
      </div>
    </div>
  )
}
