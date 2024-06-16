import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, updateUserProfile } from "./operations";
import md5 from "md5";

const initialState = {
  user: null,
  tempAvatarUrl: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTempAvatarUrl: (state, action) => {
      state.tempAvatarUrl = action.payload;
    },
    clearTempAvatarUrl: (state) => {
      state.tempAvatarUrl = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        if (!action.payload.avatarURL) {
          const hash = md5(action.payload.email.trim().toLowerCase());
          state.tempAvatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
        } else {
          state.tempAvatarUrl = null;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.user.avatarURL = action.payload.avatar;
        state.tempAvatarUrl = action.payload.avatar;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setTempAvatarUrl, clearTempAvatarUrl } = userSlice.actions;
export const userReducer = userSlice.reducer;
