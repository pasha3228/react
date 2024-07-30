import React from "react"
import useIngredients from "../../hooks/useIngredients"

const IngrCount = () => {
  const { count, increment, decrement } = useIngredients(1)

  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  )
}

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <>
          <div key={ingredient}>{ingredient} </div>
          <IngrCount />
        </>
      ))}
    </div>
  )
}
export default Ingredients
