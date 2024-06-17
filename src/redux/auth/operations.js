import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";

export const setAuthHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common["Authorization"] = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkApi) => {
    try {
      const response = await instance.post("/auth/register", userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (logInInfo, thunkApi) => {
    try {
      const response = await instance.post("/auth/login", logInInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("/auth/logout", async (_, thunkApi) => {
  try {
    await instance.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkApi) => {
    try {
      const reduxState = thunkApi.getState();
      const savedToken = reduxState.auth.token;
      if (!savedToken) {
        return thunkApi.rejectWithValue("Token is missing");
      }
      setAuthHeader(savedToken);
      const persistedToken = JSON.parse(
        JSON.parse(window.localStorage.getItem("persist:auth")).token
      );
      return persistedToken;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
