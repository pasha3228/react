import { RESTAURANTS_ACTIONS } from "./actions"
import { restaurants } from "../../../constants/fixtures"

export const restaurantsReducer = (state = restaurants, action) => {
  switch (action.type) {
    case RESTAURANTS_ACTIONS.AddRestaurants:
      return [...state, action.payload]
    default:
      return state
  }
}
