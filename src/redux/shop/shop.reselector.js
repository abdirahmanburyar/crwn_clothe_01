import { createSelector } from 'reselect'

const shopReselector = state => state.shop

export const getShopCollection = createSelector(
    [shopReselector],
    shop => shop.collections
)

export const selectCollectionsForPriview = createSelector(
    [getShopCollection],
    collections =>  Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectonUrlParams => createSelector(
    [getShopCollection],
    collections =>  collections[collectonUrlParams]
)