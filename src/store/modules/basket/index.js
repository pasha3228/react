import { createSlice } from "@reduxjs/toolkit";
import { addIngredient, removeIngredient } from "./helpers";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {},
  reducers: {
    addProduct: (state, { payload: { productId } }) => {
      state[productId] = {
        ...(state[productId] || {}),
        count: (state[productId]?.count || 0) + 1,
      };
    },
    removeProduct: (state, { payload: { productId } }) => {
      const productCount = state[productId]?.count;

      if (!productCount) {
        return;
      }

      if (productCount === 1) {
        delete state[productId];
      } else {
        state[productId].count = state[productId].count - 1;
      }
    },
    addIngredient: (state, { payload: { productId, ingredientName } }) => {
      state[productId] = addIngredient(
        productId,
        ingredientName,
        state[productId] || {}
      );
    },
    removeIngredient: (state, { payload: { productId, ingredientName } }) => {
      state[productId] = removeIngredient(
        productId,
        ingredientName,
        state[productId] || {}
      );
    },
  },
});

export const basketActions = basketSlice.actions;
