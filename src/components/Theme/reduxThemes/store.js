import { configureStore } from "@reduxjs/toolkit";
import { themesSlice } from "./themeSlice";

export const store = configureStore({
  reducer: {
    themes: themesSlice.reducer,
  },
});
