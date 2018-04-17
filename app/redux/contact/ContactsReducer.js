import { 
    CONTACT_LOAD_STATE, 
    CONTACT_ADD_CONTACT 
} from "./ContactsAction";
 
const INITIAL_STATE = { 
    contactList : [], 
    loading  :true 
};
 
//Reducer
//const contactsReducer = 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONTACT_LOAD_STATE:
            return { ...state, 
                contactList: action.contactList 
            };
        case CONTACT_ADD_CONTACT: 
            return {
                ...state,
                ...action.payload
            };
        default:
            return { ...state };
    }
};