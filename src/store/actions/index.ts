import { createRequestTypes } from '@/utils/redux';
import { createAction } from '@reduxjs/toolkit';

export const LOGIN = createRequestTypes('LOGIN');
export const REGISTER = createRequestTypes('REGISTER');
export const LOGOUT = createRequestTypes('LOGOUT');

export const UPDATE_LOGIN = createAction('UPDATE_LOGIN');
export const LOGIN_SUCCEED = createAction('LOGIN_SUCCEED');
export const UPDATE_AUTH = createAction('UPDATE_AUTH');
