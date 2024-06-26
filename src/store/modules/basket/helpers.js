export function addIngredient(productId, ingredientName, basketItem) {
  const ingredients = basketItem.ingredients || {};

  return {
    ...basketItem,
    ingredients: {
      ...ingredients,
      [ingredientName]: (ingredients[ingredientName] || 0) + 1,
    },
  };
}

export function removeIngredient(productId, ingredientName, basketItem) {
  const ingredients = basketItem.ingredients || {};

  return {
    ...basketItem,
    ingredients: {
      ...ingredients,
      [ingredientName]:
        ingredients[ingredientName] > 0 ? ingredients[ingredientName] - 1 : 0,
    },
  };
}
