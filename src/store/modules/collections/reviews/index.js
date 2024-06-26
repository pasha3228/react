import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loading-statuses";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.NotStarted,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.InProgress;
    },
    successLoading: (state, { payload: { reviews } }) => {
      state.entities = reviews.reduce(
        (acc, review) => {
          acc[review.id] = review;

          return acc;
        },
        { ...state.entities }
      );
      state.ids = [...state.ids, ...reviews.map(({ id }) => id)];
      state.loadingStatus = LOADING_STATUSES.Success;
    },
    failedLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.Failed;
    },
  },
});

export const reviewActions = reviewSlice.actions;
