import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";

export const fetchColumns = createAsyncThunk(
  "columns/fetchAll",
  async ({ workplaceId }, thunkAPI) => {
    try {
      const response = await instance.post("/columns/fetchAll", {
        workplaceId,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async ({ workplaceId, newColumn }, thunkAPI) => {
    try {
      const response = await instance.post("/columns", {
        workplaceId,
        newColumn,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async ({ workplaceId, columnId }, thunkAPI) => {
    try {
      const response = await instance.post(`/columns/delete`, {
        workplaceId,
        columnId,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  "columns/editColumn",
  async ({ workplaceId, columnId, data }, thunkApi) => {
    try {
      const response = await instance.put(`columns/edit`, {
        workplaceId,
        columnId,
        data,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getColumnById = createAsyncThunk(
  "columns/getColumnById",
  async ({ workplaceId, columnId }, thunkApi) => {
    try {
      const response = await instance.post(`columns/get`, {
        workplaceId,
        columnId,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
