import { createStore } from "redux"
import { restaurantsReducer } from "./modules/restaurants/reducer"
import { productReducer } from "./modules/products/reducer"

const rootReducer = (state = {}, action) => ({
  restaurants: restaurantsReducer(state.restaurants, action),
  product: productReducer(state.product, action)
})

export const store = createStore(rootReducer)

console.log(store.getState())
