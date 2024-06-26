export const selectProductsModuleState = (state) => state.collections.product;

export const selectProductById = (state, productId) =>
  selectProductsModuleState(state).entities[productId];

export const selectProductMap = (state) =>
  selectProductsModuleState(state).entities;

export const selectProductIds = (state) => selectProductsModuleState(state).ids;

export const selectProductNameById = (state, productId) =>
  selectProductById(state, productId)?.name;

export const selectProductPriceById = (state, { productId }) =>
  selectProductById(state, productId)?.price || 0;

export const selectProductsLoadingStatus = (state) =>
  selectProductsModuleState(state).loadingStatus;
