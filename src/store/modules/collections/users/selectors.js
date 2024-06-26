export const selectUserModuleState = (state) => state.collections.user;

export const selectUserById = (state, userId) =>
  selectUserModuleState(state).entities[userId];

export const selectUserIds = (state) => selectUserModuleState(state).ids;

export const selectUsersLoadingStatus = (state) =>
  selectUserModuleState(state).loadingStatus;
