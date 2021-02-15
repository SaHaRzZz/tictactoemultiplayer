import {SET_ONLINE, SET_USERNAME, SET_SERVER} from './types';

export const setOnline = bool => {
    return {
        type: SET_ONLINE,
        payload: bool
    }
}

export const setUsername = username => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export const setServer = server => {
    return {
        type: SET_SERVER,
        payload: server
    }
}