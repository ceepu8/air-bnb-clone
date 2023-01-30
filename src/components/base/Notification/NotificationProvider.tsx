import { createContext, useContext, useReducer } from "react"
import { Notification } from "./Notification"

const NotificationContext = createContext<any>(null)
const NotificationDispatchContext = createContext<any>(null)

const initialState: any[] = []

export const ADD = "ADD"
export const REMOVE = "REMOVE"
export const REMOVE_ALL = "REMOVE_ALL"

export const ACTION = {
  ADD_NOTI: "ADD_NOTI",
  DELETE_NOTI: "DELETE_NOTI",
  DELETE_NOTI_ALL: "DELETE_NOTI_ALL",
}

export const toastReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD_NOTI:
      return [
        ...state,
        {
          id: +new Date(),
          type: action.payload.type,
          message: action.payload.message,
        },
      ]
    case ACTION.DELETE_NOTI:
      return state.filter((t: any) => t.id !== action.payload.id)

    case ACTION.DELETE_NOTI_ALL:
      return initialState

    default:
      return state
  }
}

const NotificationProvider = ({ children }: any) => {
  const [value, dispatch] = useReducer(toastReducer, initialState)

  return (
    <NotificationContext.Provider value={value}>
      <NotificationDispatchContext.Provider value={dispatch}>
        {children}
      </NotificationDispatchContext.Provider>
      <Notification noti={value} />
    </NotificationContext.Provider>
  )
}

export default NotificationProvider

export const useNotificationStateContext = () => useContext(NotificationContext)
export const useNotificationDispatchContext = () => useContext(NotificationDispatchContext)
