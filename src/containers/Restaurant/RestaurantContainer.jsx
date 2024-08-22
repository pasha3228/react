import React from "react"
import Restaurant from "../../components/Restaurant/Restaurant"
import { useSelector } from "react-redux"
import { selectRestaurantNameById } from "../../custom-store/modules/restaurants/selectors"

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurantName = useSelector((state) => selectRestaurantNameById(state, restaurantId))

  if (!restaurantName) {
    return null
  }

  return <Restaurant restaurantId={restaurantId} name={restaurantName} />
}
