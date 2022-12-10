import { actionBaseInterface, builderInterface } from "@/interfaces"
import { createAction } from "@reduxjs/toolkit"

const safeOps = (state: any) => {
  if (typeof state.loading !== "object") {
    state.loading = {}
  }
  if (typeof state.success !== "object") {
    state.success = {}
  }
  if (typeof state.error !== "object") {
    state.error = {}
  }
}

export const createRequestTypes = (base: any) => ({
  REQUEST: createAction(`${base}_REQUEST`),
  SUCCESS: createAction(`${base}_SUCCESS`),
  FAILURE: createAction(`${base}_FAILURE`),
  BASE: base,
})

export const buildRequestReducer = (
  builder: builderInterface,
  actionBase: actionBaseInterface,
  takeout: any
) => {
  builder
    .addCase(actionBase.REQUEST, (state) => {
      safeOps(state)

      state.loading[actionBase.BASE] = true
      state.success[actionBase.BASE] = false
    })
    .addCase(actionBase.SUCCESS, (state, action) => {
      safeOps(state)

      state.success[actionBase.BASE] = true
      state.loading[actionBase.BASE] = false

      if (typeof takeout === "function") {
        takeout(state, action)
      }
      if (takeout?.constructor === Array) {
        takeout.forEach((key: any) => {
          state[key] = action.payload[key]
        })
      }
    })
    .addCase(actionBase.FAILURE, (state, action) => {
      safeOps(state)

      state.error[actionBase.BASE] = action.payload
      state.loading[actionBase.BASE] = false
      state.success[actionBase.BASE] = false
    })
}
