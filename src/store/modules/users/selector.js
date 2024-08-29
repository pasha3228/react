export const selectUsersModuleState = (state) => state.users

export const selectUserById = (state, userId) => selectUsersModuleState(state).entities[userId]
