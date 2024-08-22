import Menu from "../Menu/Menu"
import Reviews from "../Reviews/Reviews"
import React, { useMemo } from "react"
import styles from "./styles.module.css"
import { Rating } from "../Rating/Rating"
import { MenuContainer } from "../../containers/Menu/MenuContainer"

const Restaurant = ({ restaurantId, name }) => {
  // const restaurantRate = useMemo(
  //   () =>
  //     Math.ceil(
  //       restaurant.reviews.reduce((prev, curr) => prev + curr.rating, 0) /
  //         restaurant.reviews.length
  //     ),
  //   [restaurant.reviews]
  // );

  return (
    <div className={styles.root}>
      <div className={styles.restaurantInfo}>
        <div className={styles.title}>{name}</div>
        {/*<Rating value={restaurantRate} />*/}
      </div>
      <MenuContainer restaurantId={restaurantId} />
      {/*<Reviews reviews={restaurant.reviews} />*/}
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
