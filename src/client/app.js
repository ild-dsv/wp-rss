import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { renderRoutes } from 'react-router-config'
import routes from '../shared/route'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				{renderRoutes(routes)}
			</Router>
		);
	}
}

export default hot(module)(App)
