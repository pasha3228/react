import { BasketItem } from "../../components/BasketItem/BasketItem";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/modules/collections/products/selectors";
import {
  createProductFinalPriceSelector,
  selectProductCountById,
} from "../../store/modules/basket/selectors";
import { useCallback } from "react";

export const BasketItemContainer = ({ productId, className }) => {
  const selectProductFinalPrice = useCallback(
    createProductFinalPriceSelector(),
    []
  );

  const product = useSelector((state) => selectProductById(state, productId));
  const sum = useSelector((state) =>
    selectProductFinalPrice(state, { productId })
  );

  const productCount = useSelector((state) =>
    selectProductCountById(state, { productId })
  );

  if (!product) {
    return null;
  }

  const { name, price } = product;

  return (
    <BasketItem
      productId={productId}
      name={name}
      price={price}
      sum={sum}
      count={productCount}
      className={className}
    />
  );
};
