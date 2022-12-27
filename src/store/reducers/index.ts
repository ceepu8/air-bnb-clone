import { combineReducers } from "@reduxjs/toolkit"

import auth from "@/store/reducers/auth"
import roomForm from "@/store/reducers/roomForm"
export default combineReducers({
  auth,
  roomForm,
})
