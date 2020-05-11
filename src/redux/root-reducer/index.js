import { combineReducers } from 'redux'
import userReducer from '../user/userReducer'
import headerCart from '../cart/cart.reducer'
export default combineReducers({
    user: userReducer,
    cartToggle: headerCart
})