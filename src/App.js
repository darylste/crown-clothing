import './App.css';

import { Switch, Route } from 'react-router';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import LoginSignupPage from './pages/login-signup-page/loginSignupPage.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/login' component={LoginSignupPage} />
			</Switch>
		</div>
	);
}

export default App;
