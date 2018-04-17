import Realm from 'realm';

import Contact from './entities/Contact';

export default new Realm({
    schema: [
        Contact
    ]
});
