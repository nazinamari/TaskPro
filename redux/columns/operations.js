import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";
export const fetchColumns = createAsyncThunk(
  "columns/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/columns");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async (newColumn, thunkAPI) => {
    try {
      const response = await instance.post("/columns", newColumn);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/columns/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  "columns/editColumn",
  async ({ columnId, data }, thunkApi) => {
    try {
      const response = await instance.put(`columns/${columnId}`, data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getColumnById = createAsyncThunk(
  "columns/getColumnById",
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`columns/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
