export const RESTAURANTS_ACTIONS = {
  AddRestaurants: "RESTAURANTS/ADD_RESTAURANTS",
};

export const addRestaurants = (newRestaurant) => ({
  type: RESTAURANTS_ACTIONS.AddRestaurants,
  payload: newRestaurant,
});
