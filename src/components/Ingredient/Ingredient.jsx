import styles from "./styles.module.css"
import classnames from "classnames"
import useIngredientCount from "../../hooks/useIngredientCount"

export const Ingredient = ({ ingredient, className, increment, count }) => {
  const { decrement } = useIngredientCount({
    defaultValue: 1
  })

  return (
    <div className={classnames(styles.root, className)}>
      <span>{ingredient}</span>
      <div className={styles.actions}>
        <button onClick={decrement} className={styles.action}>
          -
        </button>
        {count}
        <button onClick={increment} className={styles.action}>
          +
        </button>
      </div>
    </div>
  )
}
