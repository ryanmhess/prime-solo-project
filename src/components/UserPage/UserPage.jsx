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
import LogOutButton from '../LogOutButton/LogOutButton';

function UserPage() {
	
	const history = useHistory();
	
	const user = useSelector((store) => store.user);

	const questPage = () => { history.push('/quest') };
	const familyPage = () => { history.push('/family') };

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
                <span>Welcome, {user.username}</span>
              </Typography>
              <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
                <span>
                  As the Parent Account, your role is to assign quests (chores) to your 
                  child(ren) and score them based on how well they completed their quests.
                  Please use your best judgement when assigning chores to ensure they are 
                  age appropriate and scored fairly.
                </span>
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="body1" color="text.secondary" align='justify'>
                <span>
                  FAMILY PAGE: Where you may add new child accounts.
                </span>
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="body1" color="text.secondary" align='justify'>
                <span>
                  QUESTS PAGE: Where you may review and edit current quests or create 
                  new quests for all child accounts.
                </span>
            </Typography>
              
            </CardContent>
          </Card>
          <Card sx={{ width: '80%', margin: (1, '10%'), align: 'center', opacity: '80%'}}>
          <CardActions>
            <Stack sx={{ mt: 2 }} direction="column" spacing={1} alignItems='center' marginX='auto'> 
              <Typography>
                <span>
                  Remember to log out to prevent any sneaky adventurers from
                  claiming more rewards than they are due!
                </span>
              </Typography>
                <LogOutButton className="btn" />
            </Stack>
          </CardActions>
          </Card>
        </Stack>
      </div>
      <Stack spacing={-20} direction="row" className="mobile-nav">
        {user.is_parent ? 
          <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={familyPage}><span>FAMILY</span></Button>
        : ""}
        <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={questPage}><span>QUESTS</span></Button>
      </Stack>  
		</div>
	);
}

// this allows us to use <App /> in index.js
export default UserPage;
