import './App.css';

import { Switch, Route } from 'react-router';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import LoginSignupPage from './pages/login-signup-page/loginSignupPage.component';
import { auth } from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/login' component={LoginSignupPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
