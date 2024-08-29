import React from "react"
import { IngredientContainer } from "../../containers/Ingredient/IngredientContainer"
import styles from "./styles.module.css"

export const Ingredients = ({ productId, ingredients = [] }) => {
  console.log("Render Ingredients")

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
  )
}

const IngredientsWithMemo = React.memo(Ingredients)

export default IngredientsWithMemo
