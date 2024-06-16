export const selectIsLoading = (state) => state.auth.isLoading;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectAvatar = (state) => state.auth.user.avatar;
export const selectedUserTheme = (state) => state.auth.user.theme;
