export const BASKET_ACTIONS = {
  ADD_PRODUCT: "basket/ADD_PRODUCT",
  ADD_INGREDIENT: "basket/ADD_INGREDIENT"
}

export const addProductAction = ({ productId }) => ({
  type: BASKET_ACTIONS.ADD_PRODUCT,
  payload: productId
})

export const addIngredient = ({ productId, ingredientName }) => ({
  type: BASKET_ACTIONS.ADD_INGREDIENT,
  payload: {
    productId,
    ingredientName
  }
})
