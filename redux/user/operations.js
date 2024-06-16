import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";

export const needHelp = createAsyncThunk(
  "users/needHelp",
  async (message, thunkAPI) => {
    try {
      await instance.post("/users/help", message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
