const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = ( state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'SET_CURRENT_USER': 
        return {
            ...state,
            currentUser: payload
        }
        case 'USER_LOGIN_ERROR': 
        return {
            ...state,
            error: payload
        }
        default:
            return state
    }
}

export default userReducer