import React from "react"
import Reviews from "../../components/Reviews/Reviews"
import { useSelector } from "react-redux"
import { selectRestaurantReviewIdsById } from "../../store/modules/restaurants/selectors"

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewsIds = useSelector((state) => selectRestaurantReviewIdsById(state, restaurantId))

  return <Reviews reviewsIds={reviewsIds} />
}
