import { createSlice } from "@reduxjs/toolkit";
import {
  addCard,
  deleteCard,
  editCard,
  fetchAllCards,
  getCardById,
} from "./operations";

const slice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    selectedCard: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCards.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editCard.pending, (state) => {
        state.loading = true;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(editCard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCardById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCardById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCard = action.payload;
      })
      .addCase(getCardById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export default slice.reducer;
