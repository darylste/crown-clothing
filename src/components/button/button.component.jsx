import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleLogin, ...otherProps }) => {
	return (
		<button
			className={`${isGoogleLogin ? 'google-login' : ''} button`}
			cust
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
