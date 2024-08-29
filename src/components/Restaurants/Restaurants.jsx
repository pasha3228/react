import React, { useState } from "react"

import styles from "./styles.module.css"
import { RestaurantContainer } from "../../containers/Restaurant/RestaurantContainer"
import { RestaurantTabsContainer } from "../../containers/RestaurantTabs/RestaurantTabsContainer"
import { BasketContainer } from "../../containers/Basket/BasketContainer"

export const Restaurants = ({ restaurantIds }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0)

  const selectRestaurant = (index) => {
    if (index === activeRestaurantIndex) {
      setActiveRestaurantIndex(null)
    } else {
      setActiveRestaurantIndex(index)
    }
  }

  // const tabs = restaurants.map(({ name }) => name)

  return (
    <div className={styles.root}>
      <RestaurantTabsContainer
        activeTabIndex={activeRestaurantIndex}
        onClick={selectRestaurant}
        className={styles.tabs}
      />
      {activeRestaurantIndex != null && <RestaurantContainer restaurantId={restaurantIds[activeRestaurantIndex]} />}
      <BasketContainer className={styles.basket} />
    </div>
  )
}

export const MemoRestaurants = React.memo(Restaurants)
