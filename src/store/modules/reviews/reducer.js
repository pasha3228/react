import { normalizedReviews } from "../../../constants/normalized-fixtures"

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review

    return acc
  }, {}),
  ids: normalizedReviews.map(({ id }) => id)
}

export const reviewReducer = (state = initialState, action) => {
  switch (action?.type) {
    default:
      return state
  }
}
