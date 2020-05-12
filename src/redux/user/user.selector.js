import { createSelector } from 'reselect'

const selectUSer = state => state.user


export const setCurrentUser = createSelector(
    [selectUSer],
    (user) => user.currentUser
)