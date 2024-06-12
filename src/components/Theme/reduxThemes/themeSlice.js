import { createSlice } from "@reduxjs/toolkit";
import data from "../data/theme.json";
import { fetchTheme, updateTheme } from "./operations";

const initialState = {
  allThemes: data,
  currentTheme: data[0],
  loader: false,
  error: null,
};

export const themesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.currentTheme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTheme.fulfilled, (state, action) => {
        state.currentTheme = action.payload || state.currentTheme; // Якщо завантаження не дало результатів, залишаємо тему за замовчуванням
      })
      .addCase(fetchTheme.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(fetchTheme.pending, (state) => {
        state.loader = true;
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.currentTheme = action.payload;
      })
      .addCase(updateTheme.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(updateTheme.pending, (state) => {
        state.loader = true;
      });
  },
});

export const { setTheme } = themesSlice.actions;

export default themesSlice.reducer;
