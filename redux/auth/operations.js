import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://taskpro-api-59hg.onrender.com",
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHEader = () => {
  instance.defaults.headers.common["Authorization"] = "";
};

const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkApi) => {
    try {
      const response = await instance.post("/auth/register", userInfo);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk("auth/logIn", async (logInInfo, thunkApi) => {
  try {
    const response = await instance.post("/auth/login", logInInfo);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const logOut = createAsyncThunk("auth/logOut", async (_, thunkApi) => {
  try {
    const response = await instance.post("/auth/logout");
    clearAuthHEader();
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

//ЗМІНА ТЕМИ
export const changeTheme = createAsyncThunk(
  "auth/theme",
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.patch("api/users/changeTheme", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
