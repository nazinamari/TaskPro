import { createSlice } from "@reduxjs/toolkit";
import {
  addColumn,
  deleteColumn,
  editColumn,
  fetchColumns,
  getColumnById,
} from "./operations";

const slice = createSlice({
  name: "columns",
  initialState: {
    items: [],
    currentColumn: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchColumns.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchColumns.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchColumns.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addColumn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addColumn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getColumnById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getColumnById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentColumn = action.payload;
      })
      .addCase(getColumnById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteColumn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
        state.loading = false;
        state.currentColumn = null;
      })
      .addCase(deleteColumn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(editColumn.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(editColumn.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export default slice.reducer;
