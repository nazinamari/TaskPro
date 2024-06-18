import { createSlice } from "@reduxjs/toolkit";

import { getProjectData } from "./operations";

const handlePending = (state) => {
  state.isLoadingProject = true;
};
const handleRejected = (state, action) => {
  state.isLoadingProject = false;
  state.errorProject = action.payload;
};
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    isLoadingProject: false,
    errorProject: null,
    filtersPriority: [],
  },
  reducers: {
    togglePriority: (state, { payload }) => {
      if (state.filtersPriority.includes(payload)) {
        const foundItemIndex = state.filtersPriority.indexOf(payload);

        state.filtersPriority.splice(foundItemIndex, 1);
        // find index
      } else {
        state.filtersPriority = [...state.filtersPriority, payload];
      }
    },
    showAll: (state, _) => {
      state.filtersPriority = ["without", "low", "medium", "high"];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectData.pending, handlePending)
      .addCase(getProjectData.fulfilled, (state, action) => {
        state.isLoadingProject = false;
        state.errorProject = null;
      })
      .addCase(getProjectData.rejected, handleRejected);
  },
});
export const {} = filtersSlice.actions;

export default filtersSlice.reducer;
