import { createSlice } from "@reduxjs/toolkit";
import {
  needHelp,
  updateUserTheme,
  refreshUser,
  setAvatarUrl,
} from "./operations.js";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
      avatarURL: null,
      theme: null,
    },
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    setTheme: (state, action) => {
      state.user.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(needHelp.pending, (state) => {
        state.loading = true;
      })
      .addCase(needHelp.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(needHelp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserTheme.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserTheme.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserTheme.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setAvatarUrl.pending, (state) => {
        state.loading = true;
      })
      .addCase(setAvatarUrl.fulfilled, (state, action) => {
        console.log(state.user.avatarURL);
        console.log(action.payload);
        state.user.avatarURL = action.payload;
        state.loading = false;
      })
      .addCase(setAvatarUrl.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
export const { setTheme } = userSlice.actions;
