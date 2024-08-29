export const selectReviewsModuleState = (state) => state.reviews

export const selectReviewById = (state, reviewId) => selectReviewsModuleState(state).entities[reviewId]
