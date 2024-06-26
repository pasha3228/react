export const thunkMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      action(dispatch, getState);
      return;
    }
    return next(action);
  };
