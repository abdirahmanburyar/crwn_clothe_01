const INITIAL_STATE = {
    cartHidden: false
}

const headerCart = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'SHOW_AND_HIDE_CART':
            return {
                ...state,
                cartHidden: !state.cartHidden
            }
        default: 
            return state
    }
}

export default headerCart