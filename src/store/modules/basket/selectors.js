export const selectBasketModuleState = (state) => state.basket

export const selectBasketProductIds = (state) => Object.keys(selectBasketModuleState(state))

export const selectProductCountById = (state, productId) => selectBasketModuleState(state)[productId]?.count || 0

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
