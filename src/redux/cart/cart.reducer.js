import { addToCartItem } from './cart.utils'
const INITIAL_STATE = {
    cartHidden: false,
    cart: []
}

const headerCart = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'SHOW_AND_HIDE_CART':
            return {
                ...state,
                cartHidden: !state.cartHidden
            }
            case 'ADD_TO_CART':
                return {
                ...state,
                cart: addToCartItem(payload, state.cart)
                }
        default: 
            return state
    }
}

export default headerCart