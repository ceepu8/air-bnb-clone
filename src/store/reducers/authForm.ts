import { createReducer } from "@reduxjs/toolkit"
import {
  CLOSE_LOGIN_FORM,
  CLOSE_REGISTER_FORM,
  OPEN_LOGIN_FORM,
  OPEN_REGISTER_FORM,
} from "../actions"

interface FormState {
  isLoginOpen: boolean
  isRegisterOpen: boolean
}

const INITIAL_STATE: FormState = {
  isLoginOpen: false,
  isRegisterOpen: false,
}

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(OPEN_LOGIN_FORM, (state: any) => {
    return { ...state, isLoginOpen: true }
  })
  builder.addCase(CLOSE_LOGIN_FORM, (state: any) => {
    return { ...state, isLoginOpen: false }
  })
  builder.addCase(OPEN_REGISTER_FORM, (state: any) => {
    return { ...state, isRegisterOpen: true }
  })
  builder.addCase(CLOSE_REGISTER_FORM, (state: any) => {
    return { ...state, isRegisterOpen: false }
  })
})
