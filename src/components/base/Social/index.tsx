import { SocialInterface } from "@/interfaces"
import classNames from "classnames"
import Link from "next/link"
import React from "react"

export const Social = ({ href = "", name = "", Icon }: SocialInterface) => {
  return (
    <Link href={href}>
      <a rel="noopener noreferrer" target="_blank">
        <div className="mt-4 flex cursor-pointer items-center rounded-md border-[1px] border-solid border-black-gray py-3 px-5 hover:bg-very-light-gray">
          <Icon className={classNames("h-4 w-4")} />
          <p className="flex-1 text-center text-sm font-medium text-black-gray">
            Tiếp tục với {name}
          </p>
        </div>
      </a>
    </Link>
  )
}
