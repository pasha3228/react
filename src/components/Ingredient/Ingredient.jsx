import styles from "./styles.module.css";
import classnames from "classnames";

export const Ingredient = ({
  ingredient,
  className,
  increment,
  decrement,
  count,
}) => {
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
  );
};
