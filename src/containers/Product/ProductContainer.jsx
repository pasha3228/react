import React from "react"
import Product from "../../components/Product/Product"
import { useSelector } from "react-redux"
import { selectProductById } from "../../custom-store/modules/products/selectors"

export const ProductContainer = ({ productId, className }) => {
  const product = useSelector((state) => selectProductById(state, productId))

  if (!product) {
    return null
  }

  const { name, ingredients } = product

  return <Product name={name} ingredients={ingredients} className={className} />
}
