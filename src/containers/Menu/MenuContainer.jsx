import React from "react"
import Menu from "../../components/Menu/Menu"
import { useSelector } from "react-redux"
import { selectRestaurantProductIdsById } from "../../store/modules/collections/restaurants/selectors"

export const MenuContainer = ({ restaurantId }) => {
  const productIds = useSelector((state) => selectRestaurantProductIdsById(state, restaurantId))
  return <Menu productIds={productIds} />
}
