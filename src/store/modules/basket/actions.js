export const BASKET_ACTIONS = {
  ADD_PRODUCT: "basket/ADD_PRODUCT",
  ADD_INGREDIENT: "basket/ADD_INGREDIENT",
  REMOVE_PRODUCT: "basket/REMOVE_PRODUCT",
  REMOVE_INGREDIENT: "basket/REMOVE_INGREDIENT"
}

export const addProductAction = ({ productId, productPrice }) => ({
  type: BASKET_ACTIONS.ADD_PRODUCT,
  payload: { productId, productPrice }
})

export const addIngredient = ({ productId, ingredientName }) => ({
  type: BASKET_ACTIONS.ADD_INGREDIENT,
  payload: {
    productId,
    ingredientName
  }
})

export const removeProductAction = ({ productId, priceById }) => ({
  type: BASKET_ACTIONS.REMOVE_PRODUCT,
  payload: productId,
  priceById
})

export const removeIngredient = ({ productId, ingredientName }) => ({
  type: BASKET_ACTIONS.REMOVE_INGREDIENT,
  payload: {
    productId,
    ingredientName
  }
})
