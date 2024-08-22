export const selectProductsModuleState = (state) => state.product

export const selectProductById = (state, productId) => selectProductsModuleState(state).entities[productId]
