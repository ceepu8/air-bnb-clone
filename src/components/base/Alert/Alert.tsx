import { ALERT_TYPE } from "@/constants"
import { useIsomorphicLayoutEffect } from "@/hooks"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs"

const DEFAULT_DELAY = 2500
const variants = { hide: { right: -200 }, show: { right: 0 } }

const Alert = ({ type, message, visible, onDismiss }: any) => {
  const savedCallback = useRef(onDismiss)

  const icon = {
    [ALERT_TYPE.SUCCESS]: <BsCheckCircleFill size={24} color="var(--green)" />,
    [ALERT_TYPE.ERROR]: <BsExclamationCircleFill size={24} color="var(--danger)" />,
  }[type]

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = onDismiss
  }, [onDismiss])

  useEffect(() => {
    if (visible) {
      const id = setTimeout(() => savedCallback.current(), DEFAULT_DELAY)
      return () => clearTimeout(id)
    }
  }, [visible, onDismiss])

  return (
    <div
      style={{ zIndex: 9999 }}
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 h-full w-full"
    >
      <div role="presentation" onClick={onDismiss}>
        {visible && (
          <motion.div
            variants={variants}
            className="pointer-events-none fixed -inset-x-1 -top-1 z-[9999] mx-auto flex items-end px-4 py-6 sm:items-start sm:p-6 md:inset-0"
            initial="hide"
            animate="show"
            exit="hide"
          >
            {message && (
              <div className="absolute right-8 top-24 z-[9999] flex min-h-[64px] min-w-0 max-w-[340px] gap-2 overflow-hidden whitespace-pre-wrap rounded-md bg-white px-4 py-3 text-center text-base font-semibold text-black shadow-lg hover:cursor-pointer">
                <div className="shrink-0 border-r border-solid border-gray pr-2">{icon}</div>
                <div className="w-full flex-1 break-words text-left">{message}</div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Alert
