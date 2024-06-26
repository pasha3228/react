import React, { useCallback } from "react";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "../../store/modules/collections/products/selectors";
import { selectProductCountById } from "../../store/modules/basket/selectors";
import { basketActions } from "../../store/modules/basket";

export const ProductContainer = ({ productId, className }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, productId));
  const productCount = useSelector((state) =>
    selectProductCountById(state, { productId })
  );

  const increment = useCallback(() => {
    dispatch(basketActions.addProduct({ productId }));

    if (productCount === 0) {
      product?.ingredients?.forEach((ingredientName) =>
        dispatch(basketActions.addIngredient({ productId, ingredientName }))
      );
    }
  }, [product, productCount]);

  const decrement = useCallback(() => {
    dispatch(basketActions.removeProduct({ productId }));
  }, [productId]);

  if (!product) {
    return null;
  }

  const { name, ingredients } = product;

  return (
    <Product
      productId={productId}
      name={name}
      count={productCount}
      ingredients={ingredients}
      decrement={decrement}
      className={className}
      increment={increment}
    />
  );
};
