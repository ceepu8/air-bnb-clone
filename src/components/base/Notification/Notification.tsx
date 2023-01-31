import { NotificationInterface } from "@/interfaces"
import classNames from "classnames"
import { MdOutlineClose } from "react-icons/md"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { NOTIFICATION_TYPE } from "@/constants"

const DISMISS_DEFAULT_DELAY = 1000
const HIDDEN_DEFAULT_DELAY = 2000

type NotiItemProps = {
  noti: NotificationInterface
  onDismiss: (id: number) => void
}

const NotiItem = ({ noti, onDismiss }: NotiItemProps) => {
  const { id, type, message } = noti
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  const styles = {
    [NOTIFICATION_TYPE.SUCCESS]: "bg-green text-white",
    [NOTIFICATION_TYPE.ERROR]: "bg-red-500 text-white",
    [NOTIFICATION_TYPE.WARNING]: "bg-yellow-400 text-white",
  }

  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    if (!isShow) {
      const timeout = setTimeout(() => {
        onDismiss(id)
      }, DISMISS_DEFAULT_DELAY)

      return () => clearTimeout(timeout)
    }
  }, [isShow])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(false)
    }, HIDDEN_DEFAULT_DELAY)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <motion.div
      variants={variants}
      animate={isShow ? "open" : "closed"}
      initial="closed"
      exit="open"
    >
      <div
        key={id}
        className={classNames(
          "mb-4 flex w-[350px] min-w-0 items-start overflow-hidden rounded-md py-4 px-5",
          styles[type]
        )}
      >
        <p className="flex-1">{message}</p>

        <button className="shrink-0" onClick={() => setIsShow(false)}>
          <MdOutlineClose size={24} />
        </button>
      </div>
    </motion.div>
  )
}

type Props = {
  notiArray: NotificationInterface[]
  onDismiss: (id: number) => void
}

export const Notification = ({ notiArray, onDismiss }: Props) => {
  return (
    <div className="fixed top-5 right-5 z-[51]">
      <div>
        {(notiArray || []).map((noti: NotificationInterface) => (
          <NotiItem key={noti.id} noti={noti} onDismiss={onDismiss} />
        ))}
      </div>
    </div>
  )
}
