import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTheme = createAsyncThunk(
  "themes/fetchThemes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/themes`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  "theme/updateTheme",
  async ({ userId, themes, thunkAPI }) => {
    try {
      const response = await axios.put(`/api/user/${userId}/theme`, themes);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
