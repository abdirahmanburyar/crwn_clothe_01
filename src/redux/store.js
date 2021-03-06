import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
const middlewares = []

if(process.env.NODE_ENV === 'devlopment'){
    middlewares.push(logger)
}
const store = createStore(
    rootReducer, 
    // composeWithDevTools(
    applyMiddleware(...middlewares)
        // )
    )

const persistor = persistStore(store)
export { 
    store,
    persistor
}