import React, { Suspense } from "react"
import styles from "./styles.module.css"
import classnames from "classnames"
import useCount from "../../hooks/useCount"

import ThumbUp from "./imgs/thumb-up.svg"
import { ReactComponent as ThumbDown } from "./imgs/thumb-down.svg"

const IngredientsWithMemo = React.lazy(() => import("../Ingredients/Ingredients"))

const Product = ({ productId, name, ingredients, setRef, className, increment, count }) => {
  const { decrement } = useCount(0)

  return (
    <div ref={setRef} className={classnames(styles.root, className)}>
      <div className={styles.product}>
        <span className={styles.productName}>{name}</span>

        <div className={styles.actions}>
          <button onClick={decrement} className={classnames(styles.action)}>
            {/*<img src={ThumbUp} loading="lazy" />*/}-
          </button>
          {count}
          <button onClick={increment} className={classnames(styles.action)}>
            {/*<ThumbDown className={styles.decrementComponent} />*/}+
          </button>
        </div>
      </div>
      {count > 0 && (
        <div className={styles.details}>
          <Suspense fallback={<div>Loading...</div>}>
            <IngredientsWithMemo ingredients={ingredients} productId={productId} />
          </Suspense>
        </div>
      )}
    </div>
  )
}

export default Product
