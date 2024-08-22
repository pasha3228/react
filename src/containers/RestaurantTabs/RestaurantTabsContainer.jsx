import React from "react"
import Tabs from "../../components/Tabs/Tabs"
import { useSelector } from "react-redux"
import { selectRestaurantIds } from "../../store/modules/restaurants/selectors"
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer"

export const RestaurantTabsContainer = ({ activeTabIndex, onClick }) => {
  const restaurantIds = useSelector(selectRestaurantIds)

  return (
    <Tabs
      renderTab={({ id, onClick, isActive, className }) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          onClick={onClick}
          isActive={isActive}
          className={className}
        />
      )}
      tabIds={restaurantIds}
      activeTabIndex={activeTabIndex}
      onClick={onClick}
    />
  )
}
