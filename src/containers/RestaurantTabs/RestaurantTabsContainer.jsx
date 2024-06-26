import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantIdsFilteredByName,
} from "../../store/modules/collections/restaurants/selectors";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import { useSearchParams } from "react-router-dom";

export const RestaurantTabsContainer = ({ className }) => {
  const [searchParams] = useSearchParams();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(
      state,
      searchParams.get("restaurantName") || ""
    )
  );

  if (restaurantIds?.length === 0) {
    return null;
  }

  return (
    <Tabs
      renderTab={({ id, className }) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          className={className}
        />
      )}
      tabIds={restaurantIds}
      className={className}
    />
  );
};
