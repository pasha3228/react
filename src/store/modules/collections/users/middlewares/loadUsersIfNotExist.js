import { selectUserIds } from "../selectors";
import { userActions } from "../index";

export function loadUsersIfNotExistThunk() {
  return function (dispatch, getState) {
    if (selectUserIds(getState())?.length > 0) {
      return;
    }

    dispatch(userActions.startLoading());
    fetch("http://localhost:3001/api/users/")
      .then((response) => response.json())
      .then((users) => {
        dispatch(userActions.successLoading({ users }));
      })
      .catch((e) => {
        dispatch(userActions.failedLoading());
      });
  };
}
