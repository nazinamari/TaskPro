import { createSlice } from "@reduxjs/toolkit";
import { editBoard } from "./operations";

const initialBoards = {
  board: {
    title: "",
    owner: null,
    columns: [],
    background: 
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "boards",
  initialState: initialBoards,
  extraReducers: (builder) =>
    builder
      .addCase(editBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.board = action.payload.board;
        
        
      }),
});

export default slice.reducer;
