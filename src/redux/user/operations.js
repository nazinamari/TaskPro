import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";

export const needHelp = createAsyncThunk(
  "user/needHelp",
  async (message, thunkAPI) => {
    try {
      await instance.post("/users/help", message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserTheme = createAsyncThunk(
  "user/updateUserTheme",
  async (theme, thunkAPI) => {
    try {
      const response = await instance.patch(`/theme`, { theme });
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
      const response = await instance.put("/users/update", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refreshUser",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchUser = createAsyncThunk(
// 	'users/fetchUser',
// 	async (_, thunkAPI) => {
// 		try {
// 			const response = await instance.get('/users/current');
// 			return response.data;
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error.message);
// 		}
// 	}
// );
