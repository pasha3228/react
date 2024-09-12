export const selectBasketModuleState = (state) => state.basket

export const selectBasketProductIds = (state) => Object.keys(selectBasketModuleState(state))

export const selectBasketPrice = (state) =>
  Object.values(selectBasketModuleState(state)).reduce((totalPrice, { price, count }) => {
    return (totalPrice += price * count)
  }, 0)

export const selectCount = (state) => Object.values(selectBasketModuleState(state).entities).map(({ id }) => id)

export const selectProductCountById = (state, productId) => selectBasketModuleState(state)[productId]?.count || 0

export const selectpriceById = (state, productId) => selectBasketModuleState(state)[productId]?.price

export const selectProductIngredientsById = (state, productId) => {
  const ingredientMap = selectBasketModuleState(state)[productId]?.ingredients || {}

  return Object.keys(ingredientMap).reduce((acc, ingredientName) => {
    acc.push({
      name: ingredientName,
      count: ingredientMap[ingredientName]
    })
    return acc
  }, [])
}

export const selectIngredientCountById = (state, { productId, ingredientName }) =>
  selectBasketModuleState(state)[productId]?.ingredients?.[ingredientName] || 0
