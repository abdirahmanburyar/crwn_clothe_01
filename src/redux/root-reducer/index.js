import { combineReducers } from 'redux'
import userReducer from '../user/userReducer'
import cartToggling from '../cart/cart.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartToggling
})

export default persistReducer(persistConfig, rootReducer)