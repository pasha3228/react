import React from "react"
import { Ingredient } from "../Ingredient/Ingredient"
import styles from "./styles.module.css"

export const Ingredients = ({ ingredients = [] }) => {
  console.log("Render Ingredients")

  return (
    <div>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient} ingredient={ingredient} className={styles.ingredient} />
      ))}
    </div>
  )
}

const IngredientsWithMemo = React.memo(Ingredients)

export default IngredientsWithMemo
