import { Guest } from "@/interfaces"
import { getNumberNights } from "@/utils"
import { createReducer } from "@reduxjs/toolkit"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"
import { CLEAR_DATE, SET_DATE, SET_GUEST } from "../actions"

interface FormState {
  date: DateRange | undefined
  numberNights: number | undefined
  guest: Guest
}

const INITIAL_STATE: FormState = {
  date: {
    from: new Date(),
    to: addDays(new Date(), 4),
  },
  numberNights: 3,
  guest: {
    adult: 1,
    children: 0,
    toddler: 0,
  },
}

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(SET_DATE, (state: any, action: { payload: DateRange | undefined }) => {
    const { from, to } = action.payload || {}
    return { ...state, date: action.payload, numberNights: getNumberNights(from, to) }
  })

  builder.addCase(SET_GUEST, (state, action: { payload: any }) => {
    return { ...state, guest: action.payload }
  })

  builder.addCase(CLEAR_DATE, (state) => {
    return { ...state, date: undefined }
  })
})
