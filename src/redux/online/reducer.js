import {SET_ONLINE} from './types';

const initialState = {
    isOnline: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ONLINE: return {
            ...state,
            isOnline: action.type
        }
        default: return state;
    }
}

export default reducer;