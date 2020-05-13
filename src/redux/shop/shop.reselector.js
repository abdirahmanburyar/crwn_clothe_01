import { createSelector } from 'reselect'

const shopReselector = state => state.shop

export const getShopCollection = createSelector(
    [shopReselector],
    shop => shop.collections
)