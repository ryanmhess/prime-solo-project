import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LogOutButton from '../LogOutButton/LogOutButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function ChildHome() {

  const dispatch = useDispatch();
  
  const user = useSelector((store) => store.user);
  const score = useSelector((store) => store.score);
  const highScore = useSelector((store) => store.highScore);


  useEffect(() => {
		dispatch({
			type: 'FETCH_CHILD_DETAILS',
			payload: user.id,
		})
    return () => {
      dispatch({
        type: 'CLEAR_CHILD'
      })
    }
	}, [user.id]);


  return (
  <Stack direction="column" spacing={-2} alignItems="center">
    <Card sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <Typography variant="h5" component="div" align='center' >
              <span>Welcome, {user.username}</span>
            </Typography>
          </Grid>
          <Grid xs={12} item>
            <TextField
              fullWidth
              error
              id="outlined-read-only-input"
              label="High Score:"
              value={highScore}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              fullWidth
              error
              id="outlined-read-only-input"
              label="Your Total Score:"
              value={score ? score : '0'}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid xs={12} item>
            {score === highScore ? 
              <>
                <Typography variant="body1" color="text.secondary" align='center'>
                  <span>
                    YOU HAVE THE HIGH SCORE!
                  </span>
                </Typography> 
                <Typography variant="body1" color="text.secondary" align='center'>
                  <span>
                    HUZZAH!
                  </span>
                </Typography> 
              </> : 
              <Typography variant="body1" color="text.secondary" align='center'>
                <span>
                  YOU'RE SO CLOSE!
                </span>
              </Typography> 
            }
          </Grid>
          <Grid xs={12} item>
            <Typography variant="body1" color="text.secondary" align='center'>
                <span>
                  KEEP UP THE GOOD WORK ADVENTURER!
                </span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    <Card sx={{ width: '80%', margin: (1, '10%'), align: 'center', opacity: '80%'}}>
    <CardActions>
      <Stack sx={{ mt: 2 }} direction="column" spacing={1} alignItems='center' marginX='auto'> 
        <Typography align='center'>
          <span>
            Remember to log out to prevent any sneaky goblins from
            causing mischief!
          </span>
        </Typography>
          <LogOutButton className="btn" />
      </Stack>
    </CardActions>
    </Card>
  </Stack>
  )
}

export default ChildHome;