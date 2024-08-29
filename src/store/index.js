import { createStore } from "redux"
import { restaurantsReducer } from "./modules/collections/restaurants/reducer"
import { productReducer } from "./modules/collections/products/reducer"
import { basketReducer } from "./modules/basket/reducer"

const rootInitialState = {
  collections: {}
}

const rootReducer = (state = rootInitialState, action) => {
  const newState = {
    collections: {
      restaurants: restaurantsReducer(state.collections.restaurants, action),
      product: productReducer(state.collections.product, action)
    },
    basket: basketReducer(state.basket, action)
  }

  console.log("state", newState)

  return newState
}

export const store = createStore(rootReducer)
