import { BookingInterFace } from "@/interfaces"
import { createReducer } from "@reduxjs/toolkit"
import { BOOK_FAIL, BOOK_SUCCESS, CLEAR_BOOK } from "../actions"

interface FormState {
  bookInfo: BookingInterFace | Object
  isSuccess: boolean
  isFail: boolean
}

const INITIAL_STATE: FormState = {
  bookInfo: {},
  isSuccess: false,
  isFail: false,
}

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(BOOK_SUCCESS, (state: any, action: { payload: BookingInterFace }) => {
    return { ...state, bookInfor: action.payload, isSuccess: true }
  })
  builder.addCase(BOOK_FAIL, (state: any) => {
    return { ...state, isFail: true }
  })
  builder.addCase(CLEAR_BOOK, (state: any) => {
    return { ...state, bookInfo: {}, isFail: false, isSuccess: false }
  })
})
