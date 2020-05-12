export const cartShowAndHide = () => ({ type: 'SHOW_AND_HIDE_CART' })
export const addCart = (item) => ({ type: 'ADD_TO_CART', payload: item })
export const removeItem = (item) => ({ type: 'REMOVE_ITEM', payload: item })
export const decreaseCart = (item) => ({ type: 'DECREASE_CART', payload: item })