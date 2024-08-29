import classnames from "classnames"

import styles from "./styles.module.css"
import { BasketItemIngredientsContainer } from "../../containers/BasketItemIngredients/BasketItemIngredientsContainer"

export const BasketItem = ({ productId, productName, productCount, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.product}>
        <span>{productName}</span>
        <span>{productCount}</span>
      </div>
      <BasketItemIngredientsContainer productId={productId} className={styles.ingredients} />
    </div>
  )
}
