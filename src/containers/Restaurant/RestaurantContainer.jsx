import React from "react";
import Restaurant from "../../components/Restaurant/Restaurant";
import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../store/modules/collections/restaurants/selectors";
import { useParams } from "react-router-dom";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, restaurantId)
  );

  if (!restaurantName) {
    return null;
  }

  return <Restaurant restaurantId={restaurantId} name={restaurantName} />;
};
