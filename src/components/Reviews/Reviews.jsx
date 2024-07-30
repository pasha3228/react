import React from "react"

const Reviews = ({ reviews }) => {
  const rating = reviews.reduce((acc, item) => acc + item.rating, 0) / reviews.length
  return (
    <dl>
      <div>Rating:{rating.toFixed(1)}</div>
      {reviews.map(({ id, user, text }) => (
        <React.Fragment key={id}>
          <dt>{user}</dt>
          <dd>{text}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}
export default Reviews
