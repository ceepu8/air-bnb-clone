import { NotificationInterface } from "@/interfaces"
import { REMOVE, useToastContext } from "@/store/contexts/NotificationContext"
import classNames from "classnames"
import { useEffect, useState } from "react"
import { MdOutlineClose } from "react-icons/md"

const NotiItem = ({ id, content }: NotificationInterface) => {
  const [isShow, setIsShow] = useState(false)
  const { notiDispatch } = useToastContext()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      notiDispatch({ type: REMOVE, payload: { id: id } })
      setIsShow(false)
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      key={id}
      className={classNames(
        "relative mb-4 w-[350px] rounded-md py-4 px-5 transition-all duration-500",
        {
          "bg-green text-white": content.type === "success",
          "bg-red-500 text-white": content.type === "error",
          "bg-yellow-400 text-white": content.type === "warning",
          "animate-slide-in": !isShow,
          "animate-slide-out": isShow,
        }
      )}
    >
      <button
        className="absolute top-4 right-4"
        onClick={() => notiDispatch({ type: REMOVE, payload: { id: id } })}
      >
        <MdOutlineClose />
      </button>
      <p className="mt-4">{content.message}</p>
    </div>
  )
}

export function Notification({ noti }: { noti: NotificationInterface[] }) {
  return (
    <div className="fixed top-5 right-5 z-[51]">
      <div>
        {(noti || []).map((each: NotificationInterface) => (
          <NotiItem {...each} />
        ))}
      </div>
    </div>
  )
}
