import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";
export const fetchBoards = createAsyncThunk(
  "boards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/boards");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (newBoard, thunkAPI) => {
    try {
      const response = await instance.post("/boards", newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/boards/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editBoard = createAsyncThunk(
  "boards/editBoard",
  async ({ boardId, data }, thunkApi) => {
    try {
      const response = await instance.put(`boards/${boardId}`, data);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  "boards/getBoardById",
  async (id, thunkApi) => {
    try {
      const response = await instance.get(`boards/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
