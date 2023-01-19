import { createReducer } from "@reduxjs/toolkit"
import { CLOSE_REGISTER_FORM, OPEN_REGISTER_FORM } from "../actions"

interface FormState {
  isOpen: boolean
}

const INITIAL_STATE: FormState = {
  isOpen: false,
}

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(OPEN_REGISTER_FORM, (state: any) => {
    return { ...state, isOpen: true }
  })
  builder.addCase(CLOSE_REGISTER_FORM, (state: any) => {
    return { ...state, isOpen: false }
  })
})
