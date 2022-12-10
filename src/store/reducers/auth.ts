import { createReducer } from "@reduxjs/toolkit"
import { destroyCookie, setCookie } from "nookies"

import { setDefaultHeaders } from "@/configs"
import { LOGIN, LOGIN_SUCCEED, LOGOUT, REGISTER, UPDATE_AUTH, UPDATE_LOGIN } from "@/store/actions"
import { buildRequestReducer } from "@/utils/redux"

interface authInterface {
  user: {}
  token: null
  isLogged: boolean
  provider: string
  loading: { [x: number]: boolean }
  success: { [x: number]: boolean }
}

const INITIAL_STATE: authInterface = {
  user: {},
  token: null,
  isLogged: false,
  provider: "",

  loading: {
    [LOGIN.BASE]: false,
    [LOGOUT.BASE]: false,
    [REGISTER.BASE]: false,
  },
  success: {
    [LOGIN.BASE]: false,
    [LOGOUT.BASE]: false,
    [REGISTER.BASE]: false,
  },
}

export default createReducer(INITIAL_STATE, (builder: any) => {
  buildRequestReducer(builder, LOGIN, ["user", "token"])
  buildRequestReducer(builder, REGISTER, ["user", "token"])

  builder.addCase(LOGOUT.REQUEST, () => {
    destroyCookie(null, "token", { path: "/" })
    setDefaultHeaders({ Authorization: `` })
    return INITIAL_STATE
  })

  builder.addCase(LOGIN_SUCCEED, (state: any, action: { payload: any }) => {
    const { token, user } = action.payload || {}
    setCookie(null, "token", token, {
      maxAge: 180 * 24 * 60 * 60,
      path: "/",
    })

    setDefaultHeaders({ Authorization: `Bearer ${token}` })
    return {
      ...state,
      isLogged: true,
      token,
      user,
    }
  })

  builder.addCase(UPDATE_AUTH, (state: any, action: { payload: any }) => {
    const { user } = action.payload || {}
    return {
      ...state,
      user,
    }
  })

  builder
    .addCase(
      UPDATE_LOGIN,
      (state: { [x: string]: any }, action: { payload: { [x: string]: any } }) => {
        if (typeof action.payload === "object") {
          Object.keys(action.payload).forEach((key) => {
            state[key] = action.payload[key]
          })
        }
      }
    )

    .addMatcher(
      (action: { type: string }) =>
        action.type === LOGIN.SUCCESS.type || action.type === REGISTER.SUCCESS.type,
      (state: any, action: { payload: { token: any } }) => {
        const { token } = action.payload
        setCookie(null, "token", token, {
          maxAge: 180 * 24 * 60 * 60,
          path: "/",
        })

        setDefaultHeaders({ Authorization: `Bearer ${token}` })
        return {
          ...state,
          isLogged: true,
        }
      }
    )
})
