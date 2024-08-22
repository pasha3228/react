import { createStore } from "./Store/Store"
import { restaurantsReducer } from "./modules/restaurants/reducer"

const rootReducer = (state = {}, action = {}) => ({
  restaurants: restaurantsReducer(state.restaurants, action)
})

export const store = createStore(rootReducer)
