import Menu from "../Menu/Menu"
import Reviews from "../Reviews/Reviews"
import RatingStars from "../RatingStars/RatingStars"
import React, { useMemo } from "react"
import styles from "./styles.module.css"
import InputRatingStars from "../InputRatingStars/InputRatingStars"
const Restaurant = ({ restaurant }) => {
  const restaurantRate = useMemo(
    () => Math.ceil(restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) / restaurant.reviews.length),
    [restaurant.reviews]
  )

  return (
    <div className={styles.root}>
      <div>{restaurant.name}</div>
      <div>{restaurantRate}</div>
      <RatingStars restaurantRate={restaurantRate} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      {/* <InputRatingStars totalStars={5} /> */}
    </div>
  )
}

export default Restaurant

// pure
function sum(a, b) {
  return a + b
}

// not pure
function getTimeInMs() {
  return new Date().getTime()
}

function sendLog(a) {
  console.log(a)

  return a
}
