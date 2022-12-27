import classNames from "classnames"
import React from "react"

type LineBreak = {
  className?: string
}

export const LineBreak = ({ className, ...props }: LineBreak) => (
  <div className={classNames("h-px w-full bg-light-gray", className)} {...props} />
)
