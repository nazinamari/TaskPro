import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../axios/apiInstance';

const setAuthHeader = (token) => {
	instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	instance.defaults.headers.common['Authorization'] = '';
};

export const registerUser = createAsyncThunk(
	'auth/register',
	async (userInfo, thunkApi) => {
		try {
			const response = await instance.post('/auth/register', userInfo);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const logIn = createAsyncThunk(
	'auth/logIn',
	async (logInInfo, thunkApi) => {
		try {
			const response = await instance.post('/auth/login', logInInfo);
			setAuthHeader(response.data.token);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
	try {
		// const response = await instance.post("/auth/logout");
		await instance.post('/auth/logout');
		clearAuthHeader();
		// return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk(
	'auth/refreshUser',
	async (_, thunkApi) => {
		const reduxState = thunkApi.getState();
		const savedToken = reduxState.auth.token;
		setAuthHeader(savedToken);
		try {
			const response = await instance.get('/users/current');
			console.log(response.data);
			return response.data;
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

export const updateUserTheme = createAsyncThunk(
	'auth/updateUserTheme',
	async (theme, thunkAPI) => {
		try {
			// const state = thunkAPI.getState();
			// const persistedToken = state.auth.token;
			// if (persistedToken === null) {
			// 	return thunkAPI.rejectWithValue('Unable to fetch user');
			// }

			const response = await instance.patch(`/theme`, theme);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
