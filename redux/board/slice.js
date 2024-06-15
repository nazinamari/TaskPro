import { createSlice } from "@reduxjs/toolkit";
import {
  addBoard,
  deleteBoard,
  editBoard,
  fetchBoards,
  getBoardById,
} from "./operations";
import { logOut } from "../auth/operations";

const slice = createSlice({
  name: "boards",
  initialState: {
    items: [],
    currentBoard: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBoards.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchBoards.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addBoard.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getBoardById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBoardById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBoard = action.payload;
      })
      .addCase(getBoardById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
        state.loading = false;
        state.currentBoard = null;
      })
      .addCase(deleteBoard.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(editBoard.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

export default slice.reducer;
