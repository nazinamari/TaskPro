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
    setAvatarUrl: (state, action) => {
      state.user.avatarUrl = action.payload;
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
      });
  },
});

export default userSlice.reducer;
export const { setTheme, setAvatarUrl } = userSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";
// import { needHelp, fetchUser, updateUserProfile } from "./operations";
// import md5 from "md5";

// const initialState = {
//   user: {
//     name: null,
//     email: null,
//     avatarURL: null,
//     theme: null,
//   },
//   tempAvatarUrl: null,
//   loading: false,
//   error: null,
//   success: false,
// };

// const slice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     setTempAvatarUrl: (state, action) => {
//       state.tempAvatarUrl = action.payload;
//     },
//     clearTempAvatarUrl: (state) => {
//       state.tempAvatarUrl = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(needHelp.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(needHelp.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(needHelp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         console.log(action.payload);
//         if (!action.payload.avatarURL) {
//           const hash = md5(action.payload.email.trim().toLowerCase());
//           state.tempAvatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
//         } else {
//           state.tempAvatarUrl = null;
//         }
//       })
//       .addCase(fetchUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(updateUserProfile.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateUserProfile.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.user.avatarURL = action.payload.avatar;
//         console.log("slice2", action.payload.avatar);
//         state.tempAvatarUrl = action.payload.avatar;
//         console.log("slice", action.payload.avatar);
//       })
//       .addCase(updateUserProfile.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });
// export const { setTempAvatarUrl, clearTempAvatarUrl } = slice.actions;

// export default slice.reducer;
