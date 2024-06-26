import { selectRestaurantIds } from "../selectors";
import { restaurantActions } from "../index";

export function loadRestaurantsIfNotExistThunk() {
  return function (dispatch, getState) {
    if (selectRestaurantIds(getState())?.length > 0) {
      return;
    }

    dispatch(restaurantActions.startLoading());
    fetch("http://localhost:3001/api/restaurants/")
      .then((response) => response.json())
      .then((restaurants) => {
        dispatch(restaurantActions.successLoading({ restaurants }));
      })
      .catch((e) => {
        dispatch(restaurantActions.failedLoading());
      });
  };
}
