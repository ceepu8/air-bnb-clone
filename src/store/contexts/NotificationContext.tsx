import { Notification } from "@/components"
import { createContext, useContext, useReducer } from "react"

const NotificationContext = createContext<any>(null)

const initialState: any[] = []

export const ADD = "ADD"
export const REMOVE = "REMOVE"
export const REMOVE_ALL = "REMOVE_ALL"

export const toastReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: +new Date(),
          content: action.payload.content,
          type: action.payload.type,
        },
      ]
    case REMOVE:
      return state.filter((t: any) => t.id !== action.payload.id)

    case REMOVE_ALL:
      return initialState
    default:
      return state
  }
}

export const NotificationProvider = (props: any) => {
  const [noti, notiDispatch] = useReducer(toastReducer, initialState)
  const notiData = { noti, notiDispatch }
  return (
    <NotificationContext.Provider value={notiData}>
      <Notification noti={noti} />
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useToastContext = () => {
  return useContext(NotificationContext)
}
