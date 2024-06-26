import classnames from "classnames";

import styles from "./styles.module.css";
import { BasketItemIngredientsContainer } from "../../containers/BasketItemIngredients/BasketItemIngredientsContainer";

export const BasketItem = ({
  productId,
  name,
  count,
  price,
  sum,
  className,
}) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.product}>
        <span>{name}</span>
        <div>
          <span className={styles.count}>{count}</span>*
          <span className={styles.price}>{price}₽</span>
          <span className={styles.sum}>{sum}₽</span>
        </div>
      </div>
      <BasketItemIngredientsContainer
        productId={productId}
        className={styles.ingredients}
      />
    </div>
  );
};
