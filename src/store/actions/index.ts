import { Guest, LocationInterface } from "@/interfaces"
import { createRequestTypes } from "@/utils/redux"
import { createAction } from "@reduxjs/toolkit"
import { DateRange } from "react-day-picker"

export const LOGIN = createRequestTypes("LOGIN")
export const REGISTER = createRequestTypes("REGISTER")
export const LOGOUT = createRequestTypes("LOGOUT")

export const UPDATE_LOGIN = createAction("UPDATE_LOGIN")
export const LOGIN_SUCCEED = createAction("LOGIN_SUCCEED")
export const UPDATE_AUTH = createAction("UPDATE_AUTH")

export const SET_DATE = createAction<DateRange | undefined>("SET_DATE")
export const SET_GUEST = createAction<string>("SET_GUEST")
export const CLEAR_DATE = createAction("CLEAR_DATE")

export const SET_STEP = createAction<string>("SET_STEP")

export const SET_LOCATION_DATE = createAction<DateRange | undefined>("SET_LOCATION_DATE")
export const SET_LOCATION_GUEST = createAction<Guest>("SET_LOCATION_GUEST")
export const SET_LOCATION = createAction<LocationInterface>("SET_LOCATION")
export const CLEAR_LOCATION_DATE = createAction("CLEAR_LOCATION_DATE")

export const SET_EXTEND = createAction("SET_EXTEND")
export const SET_SHRINK = createAction("SET_SHRINK")

export const OPEN_LOGIN_FORM = createAction("OPEN_LOGIN_FORM")
export const CLOSE_LOGIN_FORM = createAction("CLOSE_LOGIN_FORM")

export const OPEN_REGISTER_FORM = createAction("OPEN_REGISTER_FORM")
export const CLOSE_REGISTER_FORM = createAction("CLOSE_REGISTER_FORM")
