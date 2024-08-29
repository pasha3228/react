import { createStore } from "redux"
import { restaurantsReducer } from "./modules/restaurants/reducer"
import { productReducer } from "./modules/products/reducer"
import { reviewReducer } from "./modules/reviews/reducer"
import { userReducer } from "./modules/users/reduser"

const rootReducer = (state = {}, action) => ({
  restaurants: restaurantsReducer(state.restaurants, action),
  product: productReducer(state.product, action),
  reviews: reviewReducer(state.reviews, action),
  users: userReducer(state.users, action)
})

export const store = createStore(rootReducer)

console.log(store.getState())
