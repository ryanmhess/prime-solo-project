import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';

function TitlePage() {
  
  const history = useHistory();
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
	const errors = useSelector(store => store.errors);
	const dispatch = useDispatch();

	const login = (event) => {
		event.preventDefault();
		if (username && password) {
		dispatch({
			type: 'LOGIN',
			payload: {
			username: username,
			password: password,
			},
		});
		} else {
		dispatch({ type: 'LOGIN_INPUT_ERROR' });
		}
	}; // end login

  const handleChange = (event) => {
    // event.preventDefault();
    setChecked(event.target.checked);
    console.log('Toggle Value =', checked);
  }

  const registerUser = (event) => {
    swal({
      title: "Congratulations!",
      text: "Registration Complete!",
      icon: "success",
    }).then(() => {
      dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          password: password,
        },
      });
    })
  };

  const aboutPage = () => {
    history.push('/about');
  }

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: 'white',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#e57373',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: '#e57373',
      boxSizing: 'border-box',
    },
  }));

  return (
    <div>
      <Typography className="mobile-title" align="center" variant="h3">
        <span>Quest - Logger</span>
      </Typography>
      <div className='between-view'>
        <Stack direction="column" spacing={-2} alignItems="center">
        <Card sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
          <CardContent>
            <Typography variant="h5" component="div" align='center' >
              <span>Welcome Adventurer!</span>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
              <span>
                QUEST-LOGGER is an interactive application designed to make doing chores, or as 
                we call them, quests, an enjoyable experience for all.
              </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" align='justify'>
              <span>
                TO BEGIN: Parents please register an account. Once logged in, navigate to 
                the Family page and create accounts for each child. Make it fun and allow 
                your child to come up with an exciting username to begin their adventure!
              </span>
          </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '80%', margin: (1, '10%'), align: 'center', opacity: '80%'}}>
          <CardActions>
            <Stack sx={{ mt: 2 }} direction="row" spacing={1} alignItems='center' marginX='auto'> 
              <Typography>
                <span>LOGIN</span>
              </Typography>
                <AntSwitch inputProps={{ 'aria-label': 'ant design' }} checked={checked} onChange={handleChange}/>
              <Typography>
                <span>REGISTER</span>
              </Typography>
            </Stack>
          </CardActions>
          {!checked ? 
            <> 
              {errors.loginMessage && ( <h3 className="alert" role="alert"> {errors.loginMessage} </h3> )}
            </>
          :
            <>
              {errors.registrationMessage && ( <h3 className="alert" role="alert"> {errors.registrationMessage} </h3> )}
            </>
          }
          <CardContent>
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
            </Stack>
          </CardContent>
        </Card>
        </Stack>
      </div>
      <Stack spacing={-20} direction="row" className="mobile-nav">
        {!checked ? <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={login}><span>LOGIN</span></Button>
        : <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={registerUser}><span>REGISTER</span></Button>}
        <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={aboutPage}><span>ABOUT</span></Button>
      </Stack>
    </div>
  );
}

export default TitlePage;
