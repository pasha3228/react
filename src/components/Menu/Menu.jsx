import React from "react";
import styles from "./styles.module.css";
import { ProductContainer } from "../../containers/Product/ProductContainer";

const Menu = ({ productIds }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>Menu</span>
      <div className={styles.content}>
        {productIds.map((id) => (
          <ProductContainer
            key={id}
            productId={id}
            className={styles.product}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
