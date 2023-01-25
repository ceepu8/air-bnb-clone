import { combineReducers } from "@reduxjs/toolkit"

import auth from "@/store/reducers/auth"
import roomForm from "@/store/reducers/roomForm"
import locationForm from "@/store/reducers/locationForm"
import searchbar from "@/store/reducers/searchbar"
import authForm from "@/store/reducers/authForm"
import bookSuccess from "@/store/reducers/bookSuccess"

export default combineReducers({
  auth,
  roomForm,
  locationForm,
  searchbar,
  authForm,
  bookSuccess,
})
