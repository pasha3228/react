import { Ingredient } from "../../components/Ingredient/Ingredient";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIngredientCountById } from "../../store/modules/basket/selectors";
import { basketActions } from "../../store/modules/basket";

export const IngredientContainer = ({ productId, ingredient, className }) => {
  const dispatch = useDispatch();
  const increment = useCallback(() => {
    dispatch(
      basketActions.addIngredient({ productId, ingredientName: ingredient })
    );
  }, [productId, ingredient]);
  const decrement = useCallback(() => {
    dispatch(
      basketActions.removeIngredient({ productId, ingredientName: ingredient })
    );
  }, [productId, ingredient]);

  const count = useSelector((state) =>
    selectIngredientCountById(state, { productId, ingredientName: ingredient })
  );

  return (
    <Ingredient
      ingredient={ingredient}
      className={className}
      count={count}
      increment={increment}
      decrement={decrement}
    />
  );
};
