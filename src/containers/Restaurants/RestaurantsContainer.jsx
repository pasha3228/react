import React from "react"
import { Restaurants } from "../../components/Restaurants/Restaurants"
import { useSelector } from "react-redux"
import { selectRestaurantIds } from "../../custom-store/modules/restaurants/selectors"

export const RestaurantsContainer = () => {
  const restaurantIds = useSelector(selectRestaurantIds)

  if (!restaurantIds?.length) {
    return null
  }

  return <Restaurants restaurantIds={restaurantIds} />
}