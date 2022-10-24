import { ApiResponse, LoginValues } from '@/interfaces/auth';
import { User } from '@/interfaces/user';
import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api-client/authApi';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { call, fork, put, take } from 'redux-saga/effects';
import { userLocalService } from 'services/localService';
import { login, loginSuccess, logout } from './authReducer';

function* handleLogin(payload: LoginValues) {
  const router = useRouter();
  try {
    const result: ApiResponse<User> = yield authApi.signin(payload);

    switch (result.statusCode) {
      case 200:
        toast.success(result.message);
        userLocalService.setUserInfor(result.data);
        yield put(loginSuccess(result.data));
        router.push('/');
        break;

      case 400:
        toast.error(result.message);
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleLogout() {
  userLocalService.removeUserInfor();
}

function* watchLoginFlow() {
  while (true) {
    const action: PayloadAction<LoginValues> = yield take(login.type);
    yield fork(handleLogin, action.payload);

    yield take(logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
