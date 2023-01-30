import { NotificationInterface } from "@/interfaces"
import classNames from "classnames"
import { MdOutlineClose } from "react-icons/md"

const NotiItem = ({ id, type, message }: NotificationInterface) => {
  return (
    <div
      key={id}
      className={classNames(
        "relative mb-4 w-[350px] rounded-md py-4 px-5 transition-all duration-500",
        {
          "bg-green text-white": type === "success",
          "bg-red-500 text-white": type === "error",
          "bg-yellow-400 text-white": type === "warning",
        }
      )}
    >
      <button className="absolute top-4 right-4">
        <MdOutlineClose />
      </button>
      <p className="mt-4">{message}</p>
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
