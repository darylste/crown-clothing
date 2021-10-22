import React from 'react';

import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menuItem/menuItem.component';

const HomePage = () => {
	return (
		<div className='homepage'>
			{/* <Directory /> */}
			<Directory>
				<MenuItem title='hats' />
				<MenuItem title='jackets' />
				<MenuItem title='shoes' />
				<MenuItem title='womens' />
				<MenuItem title='mens' />
			</Directory>
		</div>
	);
};

export default HomePage;
