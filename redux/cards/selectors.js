export const selectAllCards = (state) => state.cards.items;

export const selectLoading = (state) => state.cards.loading;

export const selectError = (state) => state.cards.error;

export const getCardById = (state) => state.cards.selectedCard;
