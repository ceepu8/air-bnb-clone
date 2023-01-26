import { NotificationInterface } from "@/interfaces"
import { REMOVE, useToastContext } from "@/store/contexts/NotificationContext"
import classNames from "classnames"
import { useEffect } from "react"
import { MdOutlineClose } from "react-icons/md"

const NotiItem = ({ id, content }: NotificationInterface) => {
  const { notiDispatch } = useToastContext()

  useEffect(() => {
    setTimeout(() => {
      notiDispatch({ type: "REMOVE", payload: { id: id } })
    }, 2000)
  }, [])

  return (
    <div
      key={id}
      className={classNames("relative mb-4 w-[350px] rounded-md py-4 px-5 transition-all", {
        "bg-green text-white": content.type === "success",
        "bg-red-500 text-white": content.type === "error",
        "bg-yellow-400 text-white": content.type === "warning",
      })}
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
