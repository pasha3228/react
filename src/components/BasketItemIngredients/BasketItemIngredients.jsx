import styles from "./styles.module.css"
import classnames from "classnames"

export const BasketItemIngredients = ({ ingredients = [], className }) => (
  <div className={classnames(styles.root, className)}>
    {ingredients.map(({ name, count }) => (
      <div key={name} className={styles.ingredient}>
        <span>{name}</span>
        <span>{count}</span>
      </div>
    ))}
  </div>
)
