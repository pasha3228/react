import { Ingredient } from "../../components/Ingredient/Ingredient"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addIngredient } from "../../store/modules/basket/actions"
import { selectIngredientCountById } from "../../store/modules/basket/selectors"

export const IngredientContainer = ({ productId, ingredient, className }) => {
  const dispatch = useDispatch()
  const increment = useCallback(() => {
    dispatch(addIngredient({ productId, ingredientName: ingredient }))
  }, [productId, ingredient])

  const count = useSelector((state) => selectIngredientCountById(state, { productId, ingredientName: ingredient }))

  return <Ingredient ingredient={ingredient} className={className} count={count} increment={increment} />
}
