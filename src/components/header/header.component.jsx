import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/crown-logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/contact' className='option'>
					CONTACT
				</Link>
				{console.log(currentUser)}
				{currentUser ? (
					<div
						className='option'
						onClick={() => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/login'>
						LOGIN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
