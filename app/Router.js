import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';

import ContactsScreen from './screen/ContactsScreen';
import AddContactScreen from './screen/AddContactScreen';

export default RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="contacts" component={ContactsScreen} hideNavBar />
                <Scene key="addContact" component={AddContactScreen} hideNavBar />
            </Stack>
        </Router>
    );
};
