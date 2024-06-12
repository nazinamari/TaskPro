import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://taskpro-api-nmqb.onrender.com/",
});

export const editBoard = createAsyncThunk(
  "board/editBoard",
  async (data, thunkApi) => {
    try {
      const response = await instance.put("boards/:boardId");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
