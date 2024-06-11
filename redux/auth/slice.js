import { createSlice } from "@reduxjs/toolkit";
//import { toast } from "react-hot-toast";

import { changeTheme } from "./operations";

const initialState = {
  user: { name: null, email: null, avatar: null, theme: "dark", boards: [] },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  error: null,
  errorMessage: null,
};

const Slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
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

export const authReducer = Slice.reducer;
