import React from "react"
import { useSelector } from "react-redux"
import styles from "./styles.module.css"
import classnames from "classnames"
import { BasketItemContainer } from "../../containers/BasketItem/BasketItemContainer"

export const Basket = ({ productIds = [], className, total }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Basket</span>
      <div className={styles.products}>
        {productIds.map((productId) => (
          <BasketItemContainer key={productId} productId={productId} className={styles.product} />
        ))}
      </div>
      <div className={styles.finalPrice}>{`FinalPrice ${total}`}</div>
    </div>
  )
}
