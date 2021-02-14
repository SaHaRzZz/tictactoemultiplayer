import {createStore, combineReducers} from 'redux';

import onlineReducer from './online/reducer';

const rootStore = combineReducers({online: onlineReducer});
const store = createStore(rootStore);

export default store;