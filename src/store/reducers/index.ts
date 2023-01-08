import { combineReducers } from "@reduxjs/toolkit"

import auth from "@/store/reducers/auth"
import roomForm from "@/store/reducers/roomForm"
import locationForm from "@/store/reducers/locationForm"
import searchbar from "@/store/reducers/searchbar"

export default combineReducers({
  auth,
  roomForm,
  locationForm,
  searchbar,
})
