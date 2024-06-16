import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

const setAuthHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const response = await instance.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "users/updateUserProfile",
  async (userData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);
      const response = await instance.put("/users/update", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
