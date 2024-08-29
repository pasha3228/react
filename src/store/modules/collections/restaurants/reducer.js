import { normalizedRestaurants } from "../../../../constants/normalized-fixtures"

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant

    return acc
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id)
}

export const restaurantsReducer = (state = initialState, action) => {
  switch (action?.type) {
    default:
      return state
  }
}
