import { normalizedUsers } from "../../../constants/normalized-fixtures"

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user

    return acc
  }, {}),
  ids: normalizedUsers.map(({ id }) => id)
}

export const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    default:
      return state
  }
}
