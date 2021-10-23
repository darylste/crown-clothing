import React from 'react';

import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './login.styles.scss';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='login'>
				<h2 className='title'>I already have an account</h2>
				<span className='subtext'>Login with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						label='email address'
						required={true}
						handleChange={this.handleChange}
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						required={true}
						label='password'
						handleChange={this.handleChange}
					/>
					<div className='buttons'>
						<Button type='submit'>Submit</Button>
						<Button onClick={signInWithGoogle} isGoogleLogin>
							Sign in with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
