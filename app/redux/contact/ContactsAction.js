export const CONTACT_LOAD_STATE = 'contact_load_state';
export const CONTACT_ADD_CONTACT = 'contact_add_contact';

import realm from './../../realm/Realm';


//Action
export const ContactsLoadState = () => {
    return (dispatch) => {
        let contactList = [];

        try{
            contactList = realm.objects('Contact');
        }
        catch(error) {
            console.error(e);
        }

        dispatch({
            type: CONTACT_LOAD_STATE, 
            contactList: contactList
        });
    };
}

export const ContactsAddContact = (contact) => {
    return (dispatch) => {
        let contactList = [];
        
        if (!contact.id)
        {
            contact.id = Date.now();
        }

        try {
            realm.write(() => {
                realm.create('Contact', contact, false);
            });
            contactList = realm.objects('Contact');
        }
        catch (error) {
            console.error(error);
        }


        dispatch({
            type: CONTACT_ADD_CONTACT,
            payload:{
                contactList: contactList
            }
        });
    };
}
