import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loading-statuses";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.NotStarted,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.InProgress;
    },
    successLoading: (state, { payload: { products } }) => {
      state.entities = products.reduce(
        (acc, product) => {
          acc[product.id] = product;

          return acc;
        },
        { ...state.entities }
      );
      state.ids = [...state.ids, ...products.map(({ id }) => id)];
      state.loadingStatus = LOADING_STATUSES.Success;
    },
    failedLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.Failed;
    },
  },
});

export const productActions = productSlice.actions;
