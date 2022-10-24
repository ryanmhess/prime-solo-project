import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';

function DetailsChild() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const details = useSelector((store) => store.details);

  const questId = params.id;
  const status = (details.start === null ? 'Not Started' : (details.finish ? 'Finished' : 'In Progress'));
  const scoreCheck = (details.score === null || details.score === 0 ? (details.finish ? 'Score Pending' : 'Complete Quest For Score') : details.score);
  
  useEffect(() => {
    dispatch({
			type: 'FETCH_QUEST_DETAILS',
			payload: questId,
		})
    return () => {
      dispatch({
        type: 'CLEAR_DETAILS'
      })
    }
	}, [questId]);

  const handleBack = () => { history.push('/quest') };

  const handleStart = () => {
    swal({
      title: "To Battle!",
      text: "Your quest has commenced!",
      icon: "success",
    }).then(() => {
      dispatch({
        type: 'SET_START',
        payload: questId,
      })
      return () => {
        dispatch({
          type: 'CLEAR_DETAILS'
        })
      }
    })
  }

  const handleReset = () => {
    swal({
      title: "Are you sure?",
      text: "This will restart your quest!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willReset) => {
      if (willReset) {
        swal("Quest Reset", {
          icon: "success",
        });
        dispatch({
          type: 'SET_RESET',
          payload: questId,
        })
        return () => {
          dispatch({
            type: 'CLEAR_DETAILS'
          })
        }
      } else {
        swal("Continue the battle adventurer!");
      }
    });
  }

  const handleFinish = () => {
    swal({
      title: "Has the battle been won?",
      text: "This will end your quest.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willFinish) => {
      if (willFinish) {
        swal("Quest Complete", {
          icon: "success",
        });
        dispatch({
          type: 'SET_FINISH',
          payload: questId,
        })
        return () => {
          dispatch({
            type: 'CLEAR_DETAILS'
          })
        }
      } else {
        swal("Continue the battle adventurer!");
      }
    });
  }

  const handleRemove = () => {
    swal({
      title: "Chronicle your quest!",
      text: "This will archive your quest in the Hall of Victories!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willRemove) => {
      if (willRemove) {
        swal("Quest Chronicled", {
          icon: "success",
        });
        dispatch({
          type: 'SET_REMOVE',
          payload: questId,
        })      
        handleBack();
        return () => {
          dispatch({
            type: 'CLEAR_DETAILS'
          })
        }
      } else {
        swal("No changes made.");
      }
    });
  }


  return (
    <div className="between-view">
      <Typography className="mobile-title" align="center" variant="h4">Current Quest</Typography>
      <Stack direction="column" alignItems="center">
        <Card sx={{  width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  error
                  id="outlined-read-only-input"
                  label="Adventurer:"
                  value={details.username || ''}
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
                  label="Category:"
                  value={details.child_text || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} style={{margin: 'auto'}} item>
                <TextField
                  fullWidth
                  error
                  id="outlined-read-only-input"
                  label="Description:"
                  value={details.description || ''}
                  multiline
                  rows={5}
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
                  label="Status:"
                  value={status || ''}
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
                  label="Score:"
                  value={scoreCheck || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                <Stack spacing={7} direction="row" justifyContent="center" alignItems="center">
                  {status === 'Not Started' ? <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleStart}><span>START</span></Button> : 
                  (status === 'Finished' ? (details.score ? <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleRemove}><span>REMOVE FROM LIST</span></Button> : '') :
                    <>
                      <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleReset}><span>RESET</span></Button>
                      <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleFinish}><span>FINISH</span></Button>
                    </>)}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Stack>
      <Stack className="mobile-nav" direction="row">
        <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleBack}><span>BACK</span></Button>
      </Stack>
    </div>
  );
}

export default DetailsChild;