import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Store'

import ContactsScreen from './screen/ContactsScreen';

export default class App extends Component {
		
	render() {
		return ( 
            <Provider store={store}>          
                <ContactsScreen />          
            </Provider>
		);
	}
}