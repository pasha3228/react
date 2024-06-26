import { selectProductIds } from "../selectors";
import { selectRestaurantProductIdsById } from "../../restaurants/selectors";
import { productActions } from "../index";

export function loadProductsIfNotExistThunk(restaurantId) {
  return function (dispatch, getState) {
    const productIds = selectProductIds(getState());
    const restaurantProductIds = selectRestaurantProductIdsById(
      getState(),
      restaurantId
    );

    if (
      restaurantProductIds?.length === 0 ||
      (productIds.length > 0 &&
        restaurantProductIds.every((productId) =>
          productIds.includes(productId)
        ))
    ) {
      return;
    }

    dispatch(productActions.startLoading());
    fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
      .then((response) => response.json())
      .then((products) => {
        dispatch(productActions.successLoading({ products }));
      })
      .catch((e) => {
        dispatch(productActions.failedLoading());
      });
  };
}
