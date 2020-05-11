export const setCurrentUser = (user) => ({ type: 'SET_CURRENT_USER', payload: user })
export const loginError = (err) => ({ type: 'USER_LOGIN_ERROR', payload: err })