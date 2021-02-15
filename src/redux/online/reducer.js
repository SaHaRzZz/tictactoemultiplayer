import {SET_ONLINE, SET_USERNAME, SET_SERVER} from './types';

const initialState = {
    isOnline: false,
    username: '',
    server: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ONLINE: return {
            ...state,
            isOnline: action.type
        }
        case SET_USERNAME: return {
            ...state,
            username: action.payload
        }
        case SET_SERVER: return {
            ...state,
            server: action.payload
        }
        default: return state;
    }
}

export default reducer;