export const addToCartItem = (item, carts) => {
    const exisingCartItem = carts.find(cart => cart.id === item.id)

    if(exisingCartItem){
        return carts.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...carts, { ...item, quantity: 1 }]
}