import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProjectData = createAsyncThunk(
  "project/getData",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("project");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
