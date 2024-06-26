import { createSlice, createAction } from "@reduxjs/toolkit";
import { LOADING_STATUSES } from "../../../constants/loading-statuses";

const initialState = {
  entities: {},
  ids: [],
  loadingStatus: LOADING_STATUSES.NotStarted,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.InProgress;
    },
    successLoading: (state, { payload: { users } }) => {
      state.entities = users.reduce((acc, user) => {
        acc[user.id] = user;

        return acc;
      }, {});
      state.ids = users.map(({ id }) => id);
      state.loadingStatus = LOADING_STATUSES.Success;
    },
    failedLoading: (state) => {
      state.loadingStatus = LOADING_STATUSES.Failed;
    },
  },
});

export const userActions = userSlice.actions;
