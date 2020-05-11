import { createSelector } from 'reselect'

const selectCart = state => state.cart


export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cart
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    (cart) => cart.reduce((acc, item) => acc + item.quantity, 0)
)