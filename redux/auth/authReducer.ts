import { LoginValues } from "@/interfaces/auth";
import { User } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  logging: boolean;
  isLoggedIn: boolean;
  currentUser: User | null;
}

const initialState: AuthState = {
  logging: false,
  isLoggedIn: false,
  currentUser: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginValues>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailed: (state, action: PayloadAction<any>) => {
      state.logging = false;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

export const { login, loginFailed, loginSuccess, logout } = authReducer.actions;

export default authReducer.reducer;
