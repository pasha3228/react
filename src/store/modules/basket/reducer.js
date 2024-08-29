import { BASKET_ACTIONS } from "./actions"

const initialState = {}

export const basketReducer = (state = initialState, action) => {
  switch (action?.type) {
    case BASKET_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: {
          ...(state[action.payload] || {}),
          count: (state[action.payload]?.count || 0) + 1
        }
      }
    case BASKET_ACTIONS.ADD_INGREDIENT:
      const productId = action.payload.productId
      const ingredientName = action.payload.ingredientName
      const product = state[productId] || {}
      const ingredients = product.ingredients || {}

      return {
        ...state,
        [productId]: {
          ...product,
          ingredients: {
            ...ingredients,
            [ingredientName]: (ingredients[ingredientName] || 0) + 1
          }
        }
      }
    default:
      return state
  }
}
