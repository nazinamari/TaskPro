import { createSlice } from "@reduxjs/toolkit";
import { needHelp, updateUserTheme, refreshUser } from "./operations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: null,
      email: null,
      avatarUrl: null,
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
        state.isLoading = true;
      })
      .addCase(updateUserTheme.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateUserTheme.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
export const { setTheme } = userSlice.actions;
