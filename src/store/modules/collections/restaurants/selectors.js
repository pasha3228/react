import { createSelector } from "reselect";
import { selectReviewMap } from "../reviews/selectors";

export const selectRestaurantsModuleState = (state) =>
  state.collections.restaurants;

export const selectRestaurantIds = (state) =>
  selectRestaurantsModuleState(state).ids;

export const selectRestaurantById = (state, restaurantId) =>
  selectRestaurantsModuleState(state).entities[restaurantId];

export const selectRestaurantEntities = (state) =>
  selectRestaurantsModuleState(state).entities;

export const selectRestaurantNameById = (state, restaurantId) =>
  selectRestaurantById(state, restaurantId)?.name;

export const selectRestaurantProductIdsById = (state, restaurantId) =>
  selectRestaurantById(state, restaurantId)?.menu;

export const selectRestaurantReviewIdsById = (state, { restaurantId }) =>
  selectRestaurantById(state, restaurantId)?.reviews;

export const selectRestaurantRating = createSelector(
  [selectRestaurantReviewIdsById, selectReviewMap],
  (reviewIds, reviewMap) => {
    return Math.ceil(
      reviewIds.reduce(
        (ratingSum, reviewId) => ratingSum + (reviewMap[reviewId]?.rating || 0),
        0
      ) / reviewIds.length
    );
  }
);

export const selectRestaurantIdsFilteredByName = (state, searchValue = "") => {
  const restaurants = selectRestaurantEntities(state) || [];
  console.log(searchValue);
  return Object.values(restaurants)
    .filter(({ name }) => name.indexOf(searchValue) !== -1)
    .map(({ id }) => id);
};

// export const selectRestaurantRating = (state, { restaurantId }) => {
//   const reviewIds = selectRestaurantReviewIdsById(state, { restaurantId });
//   const reviewMap = selectReviewMap(state);
//   console.log("recalculate rating");
//   return Math.ceil(
//     reviewIds.reduce(
//       (ratingSum, reviewId) => ratingSum + (reviewMap[reviewId]?.rating || 0),
//       0
//     ) / reviewIds.length
//   );
// };

export const selectRestaurantsLoadingStatus = (state) =>
  selectRestaurantsModuleState(state).loadingStatus;

// [123, 345, 678] restaurantReviewIds
// {} reviews
