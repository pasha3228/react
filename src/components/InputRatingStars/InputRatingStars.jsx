import React from "react"
import Goldstar from "./imgs/star-gold.svg"
import GreyStar from "./imgs/star.svg"

const StarRating = ({ onChange, currentRating, value }) => {
  const starImage = currentRating === 0 ? GreyStar : currentRating >= value ? Goldstar : GreyStar

  return <img src={starImage} onClick={() => onChange(value)} />
}

const InputRatingStars = ({ onChange, currentRating }) => {
  console.log(currentRating)
  const ratings = [1, 2, 3, 4, 5]

  return (
    <div>
      {ratings.map((item) => (
        <StarRating key={item} onChange={onChange} currentRating={currentRating} value={item} />
      ))}
    </div>
  )
}

export default InputRatingStars
