
const INITIAL_STATE = {
    collections: null
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'COLLECTIONS': 
        return {
            ...state,
            collections: payload
        }
        default: 
        return state
    }
}