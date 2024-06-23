import { createSlice } from '@reduxjs/toolkit';
import {
  needHelp,
  updateUserTheme,
  refreshUser,
  setAvatarUrl,
  updateUserProfile,
} from './operations.js';

const userSlice = createSlice({
  name: 'user',
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
  extraReducers: builder => {
    builder
      .addCase(needHelp.pending, state => {
        state.loading = true;
      })
      .addCase(needHelp.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(needHelp.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateUserTheme.pending, state => {
        state.loading = true;
      })
      .addCase(updateUserTheme.fulfilled, state => {
        state.loading = false;
      })
      .addCase(updateUserTheme.rejected, state => {
        state.loading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(setAvatarUrl.pending, state => {
        state.loading = true;
      })
      .addCase(setAvatarUrl.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
        state.loading = false;
      })
      .addCase(setAvatarUrl.rejected, state => {
        state.loading = false;
      })
      .addCase(updateUserProfile.pending, state => {
        state.loading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(updateUserProfile.rejected, state => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
export const { setTheme } = userSlice.actions;
