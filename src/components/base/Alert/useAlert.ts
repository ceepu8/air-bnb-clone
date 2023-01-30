import { ALERT_TYPE } from "@/constants"
import { ACTION, useAlertDispatchContext } from "./AlertProvider"

export const useAlert = () => {
  const dispatch = useAlertDispatchContext()

  function handleDispatch(type: string, message: string) {
    if (typeof dispatch === "function") {
      dispatch({
        type: ACTION.ADD_ALERT,
        alert: { message, type },
      })
    }
  }

  return {
    success: (message: string) => handleDispatch(ALERT_TYPE.SUCCESS, message),
    error: (message: string) => handleDispatch(ALERT_TYPE.ERROR, message),
  }
}
