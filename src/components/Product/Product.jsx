import styles from "./styles.module.css"
import classnames from "classnames"
import useCount from "../../hooks/useCount"

import Ingredients from "../Ingredients/Ingredients"

const Product = ({ name, className, ingredients }) => {
  const { count, increment, decrement } = useCount(0)

  return (
    <>
      <div className={classnames(styles.root, className)}>
        <span>{name}</span>

        <div>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </div>
      </div>
      {count > 0 && <Ingredients ingredients={ingredients} />}
    </>
  )
}

export default Product
