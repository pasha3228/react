import React from "react";

import styles from "./styles.module.css";
import classnames from "classnames";
import { BasketItemContainer } from "../../containers/BasketItem/BasketItemContainer";

export const Basket = ({ productIds = [], finalPrice = 0, className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Basket</span>
      <div className={styles.products}>
        {productIds.map((productId) => (
          <BasketItemContainer
            key={productId}
            productId={productId}
            className={styles.product}
          />
        ))}
      </div>
      <div className={styles.finalPrice}>{finalPrice}₽</div>
    </div>
  );
};
