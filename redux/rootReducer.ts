import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import { routerReducer } from "connected-next-router";

const rootReducer = combineReducers({
  authReducer: authReducer,
  router: routerReducer,
});

export default rootReducer;
