import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//  function that registers a new child account to the
//  logged in parent account
function FamilyAddForm({ child }) {

	const dispatch = useDispatch();
	const history = useHistory();

	const parent_id = useSelector((store) => store.user.id);
	const errors = useSelector((store) => store.errors);
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const registerUser = (event) => {
		event.preventDefault();

		dispatch({
			type: 'REGISTER_CHILD',
			payload: {
				username: username,
				password: password,
				parent_id: parent_id,
			},
		});
		setUsername('');
		setPassword('');
		history.push('/family')
	}; // end registerUser

	return (
		<form className="formPanel childItem" onSubmit={registerUser}>
			<h2>Register Child</h2>
			{errors.registrationMessage && (
				<h3 className="alert" role="alert">
				{errors.registrationMessage}
				</h3>
			)}
			<div>
				<label htmlFor="username">
				Username:
				<input
					type="text"
					name="username"
					value={username}
					required
					onChange={(event) => setUsername(event.target.value)}
				/>
				</label>
			</div>
			<div>
				<label htmlFor="password">
				Password:
				<input
					type="password"
					name="password"
					value={password}
					required
					onChange={(event) => setPassword(event.target.value)}
				/>
				</label>
			</div>
			<div>
				<input className="btn" type="submit" name="submit" value="Register" />
			</div>
		</form>
	);
}

export default FamilyAddForm;