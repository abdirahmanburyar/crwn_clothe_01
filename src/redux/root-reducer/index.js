import { combineReducers } from 'redux'
import userReducer from '../user/userReducer'
import cartToggling from '../cart/cart.reducer'
export default combineReducers({
    user: userReducer,
    cart: cartToggling
})