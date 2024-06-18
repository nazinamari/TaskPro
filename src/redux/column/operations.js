import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";

export const fetchColumns = createAsyncThunk(
  "columns/fetchColumns",
  async (boardId, thunkApi) => {
    try {
      const response = await instance.get("/columns", boardId);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  "columns/addColumn",
  async ({ boardId, columnTitle }, thunkApi) => {
    try {
      const response = await instance.post("/columns", {
        boardId,
        columnTitle,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "columns/deleteColumn",
  async (columnId, thunkApi) => {
    try {
      const response = await instance.delete(`/columns/${columnId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
  async (columnId, thunkApi) => {
    try {
      const response = await instance.get(`columns/${columnId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
