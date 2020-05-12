export const addToCartItem = (item, carts) => {
    const exisingCartItem = carts.find(cart => cart.id === item.id)

    if(exisingCartItem){
        return carts.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...carts, { ...item, quantity: 1 }]
}

export const decreaseCartItem = (item, carts) => {
    const exisingCartItem = carts.find(cart => cart.id === item.id)
    if(exisingCartItem.quantity === 1){
        return carts.filter(cartItem => cartItem.id !== item.id )
    }

    return carts.map(itemToRemove => {
        return itemToRemove.id === item.id ? { ...itemToRemove, quantity: itemToRemove.quantity - 1} : itemToRemove
    })
}

export const removeItemFromCart = (cartItem, carts) => {
    return carts.filter(item => item.id !== cartItem.id)
}
