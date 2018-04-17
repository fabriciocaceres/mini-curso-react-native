import Realm from 'realm';

class Contact extends Realm.Object { }
Contact.schema = {
    name       : 'Contact',
    primaryKey : 'id',
    properties: {
        id    : 'int',
        name  : 'string',
        phone: {type: 'string', optional: true}
    },
};

export default Contact;