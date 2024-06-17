export const selectSuccess = (state) => state.boards.success;

export const selectLoading = (state) => state.boards.loading;

export const selectError = (state) => state.boards.error;

export const selectUser = (state) => state.users.user;

export const selectTempAvatarUrl = (state) => state.users.tempAvatarUrl;

export const selectAvatarUrl = (state) => state.users.user.avatarUrl;

export const selectIsLoading = (state) => state.loading;

export const selectIsError = (state) => state.error;
