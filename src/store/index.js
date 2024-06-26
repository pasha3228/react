import { loggerMiddleware } from "./middlewares/logger";
import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./modules/basket";
import { restaurantSlice } from "./modules/collections/restaurants";
import { productSlice } from "./modules/collections/products";
import { reviewSlice } from "./modules/collections/reviews";
import { userSlice } from "./modules/collections/users";

const rootInitialState = {
  collections: {},
};

const rootReducer = (state = rootInitialState, action) => ({
  collections: {
    restaurants: restaurantSlice.reducer(state.collections.restaurants, action),
    product: productSlice.reducer(state.collections.product, action),
    review: reviewSlice.reducer(state.collections.review, action),
    user: userSlice.reducer(state.collections.user, action),
  },
  basket: basketSlice.reducer(state.basket, action),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
  devTools: true,
});

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     loggerMiddleware,
//     loadRestaurantsIfNotExist,
//     loadProductsIfNotExist,
//     loadReviewsIfNotExist,
//     loadUsersIfNotExist
//   )
// );
