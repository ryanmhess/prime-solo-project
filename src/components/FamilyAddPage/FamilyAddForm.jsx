import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
		<>
			{errors.registrationMessage && (
				<h3 className="alert" role="alert">
				{errors.registrationMessage}
				</h3>
			)}
			<Stack direction="column" spacing={1} alignItems="center">
        <TextField 
          required
          error
          type="text" 
          label="Username" 
          placeholder="Enter Username" 
          value={username}
          onChange={(event) => { setUsername(event.target.value); }}
          fullWidth
        />
        <TextField 
          required
          error
          type="password" 
          label="Password" 
          placeholder="Enter Password" 
          value={password}
          onChange={(event) => { setPassword(event.target.value); }}
          fullWidth
        />
        <Button sx={{opacity: '80%', mt: 2}} color='error' variant="contained" onClick={registerUser}><span>ADD CHILD</span></Button>
      </Stack>
		</>
	);
}

export default FamilyAddForm;