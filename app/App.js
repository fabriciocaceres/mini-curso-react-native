import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import store from './Store';
import Router from './Router';

export default class App extends Component {
		
	render() {
		return ( 
			<Root>
				<Provider store={store}>
					<Router />
				</Provider>
			</Root>
		);
	}
}