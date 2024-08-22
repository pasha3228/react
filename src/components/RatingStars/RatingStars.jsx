import React from "react"
import Goldstar from "./imgs/star-gold.svg"
import GreyStar from "./imgs/star.svg"

const RatingStars = ({ restaurantRate }) => {
  const maxRating = 5
  const goldStars = restaurantRate
  const greyStars = maxRating - goldStars
  return (
    <div>
      {Array.from({ length: goldStars }).map(() => (
        <img src={Goldstar} />
      ))}
      {Array.from({ length: greyStars }).map(() => (
        <img src={GreyStar} />
      ))}
    </div>
  )
}
export default RatingStars
