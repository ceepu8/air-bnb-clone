import { NOTIFICATION_TYPE } from "@/constants"
import { ACTION, useNotificationDispatchContext } from "./NotificationProvider"

export const useNotification = () => {
  const dispatch = useNotificationDispatchContext()

  function handleDispatch(type: any, message: string) {
    if (typeof dispatch === "function") {
      dispatch({
        type: ACTION.ADD_NOTI,
        payload: {
          type,
          message,
        },
      })
    }
  }

  return {
    success: (message: string) => handleDispatch(NOTIFICATION_TYPE.SUCCESS, message),
    error: (message: string) => handleDispatch(NOTIFICATION_TYPE.SUCCESS, message),
  }
}
