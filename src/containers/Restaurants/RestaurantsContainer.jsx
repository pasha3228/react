import React, { useEffect } from "react";
import { Restaurants } from "../../components/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantsLoadingStatus,
} from "../../store/modules/collections/restaurants/selectors";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import { selectUsersLoadingStatus } from "../../store/modules/collections/users/selectors";
import { loadRestaurantsIfNotExistThunk } from "../../store/modules/collections/restaurants/middlewares/loadRestaurantsIfNotExist";
import { loadUsersIfNotExistThunk } from "../../store/modules/collections/users/middlewares/loadUsersIfNotExist";

export const RestaurantsContainer = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantsLoadingStatus = useSelector(selectRestaurantsLoadingStatus);
  const usersLoadingStatus = useSelector(selectUsersLoadingStatus);

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExistThunk());
    dispatch(loadUsersIfNotExistThunk());
  }, []);

  if (
    [restaurantsLoadingStatus, usersLoadingStatus].includes(
      LOADING_STATUSES.InProgress
    )
  ) {
    return <span>Loading...</span>;
  }

  if (
    [restaurantsLoadingStatus, usersLoadingStatus].includes(
      LOADING_STATUSES.Failed
    )
  ) {
    return <span>Error</span>;
  }

  if (!restaurantIds?.length) {
    return null;
  }

  return <Restaurants restaurantIds={restaurantIds} />;
};
