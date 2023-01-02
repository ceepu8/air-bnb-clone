import { LocationInterface } from "@/interfaces"
import { createReducer } from "@reduxjs/toolkit"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"
import {
  CLEAR_LOCATION_DATE,
  SET_LOCATION,
  SET_LOCATION_DATE,
  SET_LOCATION_GUEST,
  SET_STEP,
} from "../actions"

interface Guest {
  adult: number
  children: number
  toddler: number
}

interface FormState {
  step: string
  location: LocationInterface
  date: DateRange | undefined
  guest: Guest
}

const INITIAL_STATE: FormState = {
  step: "1",
  location: {
    id: 0,
    tenViTri: "",
    tinhThanh: "",
    quocGia: "",
    hinhAnh: "",
  },
  date: {
    from: new Date(),
    to: addDays(new Date(), 4),
  },
  guest: {
    adult: 1,
    children: 0,
    toddler: 0,
  },
}

export default createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(SET_STEP, (state: any, action: { payload: string }) => {
    return { ...state, step: action.payload }
  })
  builder.addCase(SET_LOCATION, (state: any, action: { payload: LocationInterface }) => {
    return { ...state, location: action.payload }
  })
  builder.addCase(SET_LOCATION_DATE, (state: any, action: { payload: DateRange | undefined }) => {
    return { ...state, date: action.payload }
  })

  builder.addCase(SET_LOCATION_GUEST, (state, action: { payload: Guest }) => {
    return { ...state, guest: action.payload }
  })

  builder.addCase(CLEAR_LOCATION_DATE, (state) => {
    return { ...state, date: undefined }
  })
})
