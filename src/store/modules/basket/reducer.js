import { BASKET_ACTIONS } from "./actions"

const initialState = {}

export const basketReducer = (state = initialState, action) => {
  switch (action?.type) {
    case BASKET_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        [action.payload.productId]: {
          ...(state[action.payload.productId] || {}),
          count: (state[action.payload.productId]?.count || 0) + 1,
          price: action.payload.productPrice
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
    case BASKET_ACTIONS.REMOVE_PRODUCT:
      const currentCount = state[action.payload]?.count || 0
      if (currentCount > 1) {
        return {
          ...state,
          [action.payload]: {
            ...(state[action.payload] || {}),
            count: currentCount - 1
          }
        }
      }
      const newState = { ...state }
      delete newState[action.payload]
      return newState

    case BASKET_ACTIONS.REMOVE_INGREDIENT:
      const productId2 = action.payload.productId
      const ingredientName2 = action.payload.ingredientName
      const product2 = state[productId2] || {}
      const ingredients2 = product2.ingredients || {}
      const currentCountIngredients = ingredients2[ingredientName2] || 0
      return {
        ...state,
        [productId2]: {
          ...product2,
          ingredients: {
            ...ingredients2,
            [ingredientName2]: currentCountIngredients > 0 ? currentCountIngredients - 1 : 0
          }
        }
      }

    default:
      return state
  }
}
