import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import { createContext, useContext, useReducer } from "react"

import Alert from "./Alert"

export const ACTION = {
  ADD_ALERT: "ADD_ALERT",
  DELETE_ALERT: "DELETE_ALERT",
}

export function AlertReducer(state: any, action: { type: any; alert: any }) {
  switch (action.type) {
    case ACTION.ADD_ALERT: {
      return {
        ...state,
        alert: action.alert,
      }
    }
    case ACTION.DELETE_ALERT: {
      return {
        ...state,
        alert: {},
      }
    }
    default: {
      throw new Error("Unhandled action type!")
    }
  }
}

const AlertStateContext = createContext({ alert: {} })
const AlertDispatchContext = createContext({})

const AlertProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AlertReducer, {
    alert: {},
  })

  const onDismiss = () =>
    dispatch({
      type: ACTION.DELETE_ALERT,
      alert: {},
    })

  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>{children}</AlertDispatchContext.Provider>
      <Alert {...state.alert} onDismiss={onDismiss} visible={!isEmpty(state.alert)} />
    </AlertStateContext.Provider>
  )
}

export default AlertProvider
AlertProvider.propTypes = { children: PropTypes.node }

export const useAlertDispatchContext = () => useContext(AlertDispatchContext)
export const useAlertStateContext = () => useContext(AlertStateContext)
