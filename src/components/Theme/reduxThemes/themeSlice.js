import { createSlice } from "@reduxjs/toolkit";

export const themesSlice = createSlice({
  initialState: {
    items: [],
  },
  name: "themes",
  reducers: {},
});

export const selectThemes = (state) => state.themes.items;
