import React, { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantProductIdsById } from "../../store/modules/collections/restaurants/selectors";
import { selectProductsLoadingStatus } from "../../store/modules/collections/products/selectors";
import { LOADING_STATUSES } from "../../store/constants/loading-statuses";
import { loadProductsIfNotExistThunk } from "../../store/modules/collections/products/middlewares/loadProductsIfNotExist";

export const MenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const productIds = useSelector((state) =>
    selectRestaurantProductIdsById(state, restaurantId)
  );
  const loadingStatus = useSelector(selectProductsLoadingStatus);

  useEffect(() => {
    dispatch(loadProductsIfNotExistThunk(restaurantId));
  }, [restaurantId]);

  if (loadingStatus === LOADING_STATUSES.InProgress) {
    return <span>Loading...</span>;
  }

  if (loadingStatus === LOADING_STATUSES.Failed) {
    return <span>Failed</span>;
  }

  if (productIds?.length === 0) {
    return null;
  }

  return <Menu productIds={productIds} />;
};
