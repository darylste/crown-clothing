import './App.css';

import { Switch, Route } from 'react-router';

import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shopPage/shopPage.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
