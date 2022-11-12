import React, { Component } from "react";
import { View, Text } from "react-native";
import MainAppRoutes from "./routes/MainAppRoutes";
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

class App extends Component {
	render() {

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

		return (
			<Provider store={store}>
				<MainAppRoutes />
			</Provider>
		)
	}
}

export default App;
