import React from 'react';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LogOutButton from '../LogOutButton/LogOutButton';


function ParentHome() {

  const user = useSelector((store) => store.user);

  return (
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
          <Typography align='center'>
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
  )
}

export default ParentHome;