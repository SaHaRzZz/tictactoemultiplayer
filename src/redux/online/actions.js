import {SET_ONLINE} from './types';

export const setOnline = bool => {
    return {
        type: SET_ONLINE,
        payload: bool
    }
}