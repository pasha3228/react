export const selectPricesModuleState = (state) => state.collections.product.price

export const selectPriceById = (state, productId) => selectProductsModuleState(state).entities[productId]

export const selectPriceNameById = (state, productId) => selectPriceById(state, productId)?.price
