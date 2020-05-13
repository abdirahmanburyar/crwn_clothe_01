import { combineReducers } from 'redux'
import userReducer from '../user/userReducer'
import cartToggling from '../cart/cart.reducer'
import sectionsCart  from '../directory/directory-reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import shopReducer from '../shop/shop.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartToggling,
    directory: sectionsCart,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)