import { createSlice } from "@reduxjs/toolkit";
import { needHelp } from "./operations";

const slice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: null,
    success: false,
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
      });
  },
});

export default slice.reducer;
