import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import {
  register,
  login,
  refreshUser,
  logout,
  updateProfile,
  forgetPassword,
  changePassword,
  sendHelpRequest,
  changeTheme,
} from "./operations";

const initialState = {
  user: { name: null, email: null, avatar: null, theme: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      const errorMessage = action.payload;
      if (errorMessage === "Email in use") {
        state.errorMessage = errorMessage;
        toast.error(state.errorMessage);
      } else {
        state.isError = true;
      }
    },
    [login.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
      state.isError = true;
    },
    [logout.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [logout.fulfilled](state) {
      state.isLoading = false;
      state.user = { name: null, email: null, avatar: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      state.isError = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateProfile.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [updateProfile.fulfilled](state, action) {
      state.user = { ...state.user, ...action.payload.user };
      state.isLoading = false;
    },
    [updateProfile.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      toast.error(state.errorMessage);
    },
    [forgetPassword.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [forgetPassword.fulfilled](state) {
      state.isLoading = false;
    },
    [forgetPassword.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [changePassword.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [changePassword.fulfilled](state) {
      state.isLoading = false;
    },
    [changePassword.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [sendHelpRequest.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [sendHelpRequest.fulfilled](state) {
      state.isLoading = false;
    },
    [sendHelpRequest.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [changeTheme.pending](state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    [changeTheme.fulfilled](state, action) {
      state.isLoading = false;
      state.user.theme = action.payload.theme;
    },
    [changeTheme.rejected](state, action) {
      state.isLoading = false;
      state.isError = true;
      state.user.errorMessage = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
