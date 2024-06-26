export const loggerMiddleware = (store) => (next) => (action) => {
  // console.log("================");
  // console.log(action);
  // console.log(store.getState());
  // console.log("================");

  return next(action);
};
