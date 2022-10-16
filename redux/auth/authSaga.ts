import { ApiResponse, LoginValues } from "@/interfaces/auth";
import { User } from "@/interfaces/user";
import { PayloadAction } from "@reduxjs/toolkit";
import authApi from "api-client/authApi";
import { fork, take, call, takeEvery, put } from "redux-saga/effects";
import { login, loginSuccess, logout } from "./authReducer";

function* handleLogin(payload: LoginValues) {
  try {
    const result: ApiResponse<User> = yield authApi.signin(payload);
    console.log(result);
    yield put(loginSuccess(result.data));
  } catch (error) {
    console.log(error);
  }
}

function* handleLogout() {
  console.log("Handle Logout");
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginValues> = yield take(login.type);
    yield fork(handleLogin, action.payload);

    // yield take(logout.type);
    // yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
