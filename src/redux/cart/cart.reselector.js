import { createSelector } from 'reselect'

const selectCart = state => state.cart


export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cart
)

export const cartHidden = createSelector(
    [selectCart],
    (cart) => cart.cartHidden
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    (cart) => cart.reduce((acc, item) => acc + item.quantity, 0)
)

export const selectCartItemTotal = createSelector(
    [selectCartItem],
    (cart) => cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
)