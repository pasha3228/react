import React, { useCallback } from "react"
import Product from "../../components/Product/Product"
import { useDispatch, useSelector } from "react-redux"
import { selectPriceById, selectProductById } from "../../store/modules/collections/products/selectors"
import { addIngredient, addProductAction, removeProductAction } from "../../store/modules/basket/actions"
import { selectProductCountById } from "../../store/modules/basket/selectors"

export const ProductContainer = ({ productId, className }) => {
  const dispatch = useDispatch()
  const product = useSelector((state) => selectProductById(state, productId))
  const productCount = useSelector((state) => selectProductCountById(state, productId))
  const productPrice = useSelector((state) => selectPriceById(state, productId))
  const increment = useCallback(() => {
    dispatch(addProductAction({ productId, productPrice }))

    if (productCount === 0) {
      product?.ingredients?.forEach((ingredientName) => dispatch(addIngredient({ productId, ingredientName })))
    }
  }, [product, productCount])

  const decrement = useCallback(() => {
    dispatch(removeProductAction({ productId }))
  }, [product, productCount])

  if (!product) {
    return null
  }

  const { name, ingredients } = product

  return (
    <Product
      productId={productId}
      name={name}
      count={productCount}
      ingredients={ingredients}
      className={className}
      increment={increment}
      decrement={decrement}
    />
  )
}
