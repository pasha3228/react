export const selectReviewModuleState = (state) => state.collections.review;

export const selectReviewById = (state, reviewId) =>
  selectReviewModuleState(state).entities[reviewId];

export const selectReviewIds = (state) => selectReviewModuleState(state).ids;

export const selectReviewMap = (state) =>
  selectReviewModuleState(state).entities;

export const selectReviewsLoadingStatus = (state) =>
  selectReviewModuleState(state).loadingStatus;
