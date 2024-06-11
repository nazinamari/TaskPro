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

export const register = createAsyncThunk(
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

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkApi) => {
  try {
    const response = await instance.post("/auth/logout");
    clearAuthHEader();
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkApi) => {
    const reduxState = thunkApi.getState();
    const savedToken = reduxState.auth.token;
    setAuthHeader(savedToken);

    try {
      const response = await instance.post("/auth/refresh");
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = thunkApi.getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
