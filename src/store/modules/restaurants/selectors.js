export const selectRestaurantsModuleState = (state) => state.restaurants

export const selectRestaurantIds = (state) => selectRestaurantsModuleState(state).ids

export const selectRestaurantById = (state, restaurantId) => selectRestaurantsModuleState(state).entities[restaurantId]

export const selectRestaurantNameById = (state, restaurantId) => selectRestaurantById(state, restaurantId)?.name

export const selectRestaurantProductIdsById = (state, restaurantId) => selectRestaurantById(state, restaurantId)?.menu

export const selectRestaurantReviewIdsById = (state, restaurantId) => {
  return selectRestaurantById(state, restaurantId)?.reviews
}
