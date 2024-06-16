// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const instance = axios.create({
//   baseURL: "https://taskpro-api-nmqb.onrender.com",
// });

// export const fetchAllCards = createAsyncThunk(
//   "cards/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get("/cards");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addCard = createAsyncThunk(
//   "cards/addCard",
//   async (newCard, thunkAPI) => {
//     try {
//       const response = await instance.post("/cards", newCard);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteCard = createAsyncThunk(
//   "cards/deleteCard",
//   async (id, thunkAPI) => {
//     try {
//       const response = await instance.delete(`/cards/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const editCard = createAsyncThunk(
//   "cards/editCards",
//   async ({ cardId, data }, thunkApi) => {
//     try {
//       const response = await instance.put(`/cards/${cardId}`, data);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const getCardById = createAsyncThunk(
//   "cards/getCardById",
//   async (cardId, thunkApi) => {
//     try {
//       const response = await instance.get(`boards/${cardId}`);
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://taskpro-api-nmqb.onrender.com",
});

export const fetchAllCards = createAsyncThunk(
  "cards/fetchAll",
  async ({ columnId }, thunkAPI) => {
    try {
      const response = await axios.post("/api/cards/fetchAll", { columnId });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCard = createAsyncThunk(
  "cards/add",
  async ({ columnId, card }, thunkAPI) => {
    try {
      const response = await axios.post("/api/cards/add", { columnId, card });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  "cards/delete",
  async ({ columnId, cardId }, thunkAPI) => {
    try {
      await axios.post("/api/cards/delete", { columnId, cardId });
      return { cardId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  "cards/edit",
  async ({ columnId, card }, thunkAPI) => {
    try {
      const response = await axios.post("/api/cards/edit", { columnId, card });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCardById = createAsyncThunk(
  "cards/getById",
  async ({ columnId, cardId }, thunkAPI) => {
    try {
      const response = await instance.get(`boards/${cardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//       const response = await axios.post("/api/cards/getById", {
//         columnId,
//         cardId,
//       });