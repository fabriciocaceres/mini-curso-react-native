import { combineReducers } from 'redux';

import ContactsReducer from './contact/ContactsReducer';

export default combineReducers({
    contacts : ContactsReducer,
});