import { BasketItemIngredients } from "../../components/BasketItemIngredients/BasketItemIngredients"
import { useSelector } from "react-redux"
import { selectProductIngredientsById } from "../../store/modules/basket/selectors"

export const BasketItemIngredientsContainer = ({ productId, className }) => {
  const ingredients = useSelector((state) => selectProductIngredientsById(state, productId))

  return <BasketItemIngredients ingredients={ingredients} className={className} />
}
