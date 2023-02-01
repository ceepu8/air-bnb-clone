import { useMouseLeave } from "@/hooks"
import cn from "classnames"
import React, { ReactNode } from "react"

type Props = {
  placement?: "bottom" | "bottomLeft" | "bottomRight"
  title?: string
  content?: ReactNode
  children?: ReactNode
}

export const Popover = ({ placement = "bottom", title = "", content, children }: Props) => {
  const position = {
    bottom: "top-full right-0 mt-2",
    bottomRight: "top-full right-0 mt-2",
    bottomLeft: "top-full left-0 mt-2",
  }[placement]

  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>()

  return (
    <div ref={ref} className="relative">
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
        {title && <h1>{title}</h1>}
        {content}
      </div>
    </div>
  )
}
