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
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://taskpro-api-nmqb.onrender.com',
});

export const fetchAllCards = createAsyncThunk(
	'cards/fetchAll',
	async ({ columnId }, thunkAPI) => {
		try {
			const response = await axios.post('/api/cards/fetchAll', { columnId });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addCard = createAsyncThunk(
	'cards/add',
	async ({ columnId, card }, thunkAPI) => {
		try {
			const response = await axios.post('/api/cards/add', { columnId, card });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteCard = createAsyncThunk(
	'cards/delete',
	async ({ columnId, cardId }, thunkAPI) => {
		try {
			await axios.post('/api/cards/delete', { columnId, cardId });
			return { cardId };
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const editCard = createAsyncThunk(
	'cards/edit',
	async ({ columnId, card }, thunkAPI) => {
		try {
			const response = await axios.post('/api/cards/edit', { columnId, card });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const getCardById = createAsyncThunk(
	'cards/getById',
	async ({ cardId }, thunkAPI) => {
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

// import { createSlice } from '@reduxjs/toolkit';
// import {
// 	addCard,
// 	deleteCard,
// 	editCard,
// 	fetchAllCards,
// 	getCardById,
// } from './operations';

// const slice = createSlice({
// 	name: 'cards',
// 	initialState: {
// 		items: [],
// 		selectedCard: null,
// 		loading: false,
// 		error: null,
// 	},
// 	extraReducers: (builder) =>
// 		builder
// 			.addCase(fetchAllCards.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(fetchAllCards.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.items = action.payload;
// 			})
// 			.addCase(fetchAllCards.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.error.message;
// 			})
// 			.addCase(addCard.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(addCard.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.items.push(action.payload);
// 			})
// 			.addCase(addCard.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.error.message;
// 			})
// 			.addCase(deleteCard.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(deleteCard.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.items = state.items.filter(
// 					(item) => item.id !== action.payload.id
// 				);
// 			})
// 			.addCase(deleteCard.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.error.message;
// 			})
// 			.addCase(editCard.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(editCard.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.items = state.items.map((item) =>
// 					item.id === action.payload.id ? action.payload : item
// 				);
// 			})
// 			.addCase(editCard.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.error.message;
// 			})
// 			.addCase(getCardById.pending, (state) => {
// 				state.loading = true;
// 			})
// 			.addCase(getCardById.fulfilled, (state, action) => {
// 				state.loading = false;
// 				state.selectedCard = action.payload;
// 			})
// 			.addCase(getCardById.rejected, (state, action) => {
// 				state.loading = false;
// 				state.error = action.error.message;
// 			}),
// });

// export default slice.reducer;
