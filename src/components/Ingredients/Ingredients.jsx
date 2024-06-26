import React from "react";
import styles from "./styles.module.css";
import { IngredientContainer } from "../../containers/Ingredient/IngredientContainer";

export const Ingredients = ({ productId, ingredients = [] }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <IngredientContainer
          productId={productId}
          key={ingredient}
          ingredient={ingredient}
          className={styles.ingredient}
        />
      ))}
    </div>
  );
};

const IngredientsWithMemo = React.memo(Ingredients);

export default IngredientsWithMemo;
