import { createSlice } from '@reduxjs/toolkit';
import {
	registerUser,
	logIn,
	logOut,
	refreshUser,
	updateUserTheme,
	fetchtUserTheme,
} from './operations';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: null,
			email: null,
			avatarURL: null,
			theme: null,
		},
		token: null,
		isLoggedIn: false,
		isRefreshing: false,
		isLoading: false,
	},
	reducers: {
		setTheme: (state, action) => {
			state.user.theme = action.payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
				state.isLoading = false;
				state.status = 'succeeded';
			})
			.addCase(registerUser.rejected, (state) => {
				state.isLoading = false;
				state.status = 'failed';
			})

			.addCase(logIn.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logIn.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
				state.isLoggedIn = true;
			})
			.addCase(logIn.rejected, (state) => {
				state.isLoading = false;
			})

			.addCase(logOut.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logOut.fulfilled, (state) => {
				state.isLoading = false;
				state.user = null;
				state.token = null;
				state.isLoggedIn = false;
			})
			.addCase(logOut.rejected, (state) => {
				state.isLoading = false;
			})

			.addCase(refreshUser.pending, (state) => {
				state.isRefreshing = true;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.token = action.payload.token;
				state.user = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;
			})
			.addCase(refreshUser.rejected, (state) => {
				state.isRefreshing = false;
			})
			.addCase(fetchtUserTheme.pending, (state) => {
				state.error = false;
				state.isLoading = true;
			})
			.addCase(fetchtUserTheme.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user.theme = action.payload;
			})
			.addCase(fetchtUserTheme.rejected, (state) => {
				state.isLoading = false;
				state.error = true;
			})
			.addCase(updateUserTheme.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUserTheme.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user.theme = action.payload;
			})
			.addCase(updateUserTheme.rejected, (state) => {
				state.isLoading = false;
			}),
});

export const { setTheme } = authSlice.actions;

export default authSlice.reducer;
