import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loading-statuses";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.NotStarted,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.InProgress;
    },
    successLoading: (state, { payload: { restaurants } }) => {
      state.entities = restaurants.reduce((acc, restaurant) => {
        acc[restaurant.id] = restaurant;

        return acc;
      }, {});
      state.ids = restaurants.map(({ id }) => id);
      state.loadingStatus = LOADING_STATUSES.Success;
    },
    failedLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.Failed;
    },
  },
});

export const restaurantActions = restaurantSlice.actions;
