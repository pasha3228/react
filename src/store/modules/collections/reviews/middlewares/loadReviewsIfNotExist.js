import { selectRestaurantReviewIdsById } from "../../restaurants/selectors";
import { selectReviewIds } from "../selectors";
import { reviewActions } from "../index";

export function loadReviewsIfNotExistThunk(restaurantId) {
  return function (dispatch, getState) {
    const reviewIds = selectReviewIds(getState());
    const restaurantReviewIds = selectRestaurantReviewIdsById(getState(), {
      restaurantId: restaurantId,
    });

    if (
      restaurantReviewIds?.length === 0 ||
      (reviewIds?.length > 0 &&
        restaurantReviewIds?.every((reviewId) => reviewIds?.includes(reviewId)))
    ) {
      return;
    }

    dispatch(reviewActions.startLoading());
    fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
      .then((response) => response.json())
      .then((reviews) => {
        dispatch(reviewActions.successLoading({ reviews }));
      })
      .catch((e) => {
        dispatch(reviewActions.failedLoading());
      });
  };
}
