import Menu from "../Menu/Menu"
import Reviews from "../Reviews/Reviews"
import React, { useMemo } from "react"
import styles from "./styles.module.css"

const Restaurant = ({ restaurant }) => {
  const restaurantRate = useMemo(
    () => Math.ceil(restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) / restaurant.reviews.length),
    [restaurant.reviews]
  )

  return (
    <div className={styles.root}>
      <div>{restaurant.name}</div>
      <div>{restaurantRate}</div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
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
