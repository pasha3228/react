export const selectProductsModuleState = (state) => state.collections.product

export const selectProductById = (state, productId) => selectProductsModuleState(state).entities[productId]

export const selectProductNameById = (state, productId) => selectProductById(state, productId)?.name

export const selectPriceById = (state, productId) => selectProductById(state, productId)?.price
