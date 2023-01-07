import { createReducer } from "@reduxjs/toolkit"
import { SET_EXTEND, SET_SHRINK } from "../actions"

interface FormState {}

const INITIAL_STATE: FormState = {
  isExtended: false,
}

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(SET_EXTEND, (state: any) => {
    return { ...state, isExtended: true }
  })
  builder.addCase(SET_SHRINK, (state: any) => {
    return { ...state, isExtended: false }
  })
})
