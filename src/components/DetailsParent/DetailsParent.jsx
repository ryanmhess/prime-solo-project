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

function DetailsParent() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const details = useSelector((store) => store.details);

  const questId = params.id;
  const status = (details.start === null ? 'Not Started' : (details.finish ? 'Finished' : 'In Progress'));
  const score = (details.score ? details.score : (details.finish ? 'Score Pending' : 'Complete Quest For Score'));
  
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
  
  const questPage = () => { history.push('/quest') };
  const editPage = () => { history.push(`/edit/${questId}`) };
  const handleDelete = () => {
    console.log('Hi', questId);
    dispatch({
			type: 'DELETE_QUEST',
			payload: questId
		})
    questPage();
  }

  return (
    <>
      <Typography className="mobile-title" align="center" variant="h4">Quest Details</Typography>
      <Card position='fixed' style={{maxWidth:700, margin:"25% 2.5%", padding: "20px 5px" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Child:"
                value={details.username || ''}
                // defaultValue={details.username}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Category:"
                value={details.parent_text || ''}
                // defaultValue={details.parent_text}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid xs={12} style={{margin: 'auto'}} item>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Description:"
                value={details.description || ''}
                // defaultValue={details.description}
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
                id="outlined-read-only-input"
                label="Status:"
                value={status || ''}
                // defaultValue={status}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid xs={12} item>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Score:"
                value={score || ''}
                // defaultValue={score}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid xs={12} item>
              <Stack spacing={7} direction="row" justifyContent="center" alignItems="center">
                    <Button variant="outlined"  className="mobile-nav-btn" onClick={editPage}>Edit</Button>
                    <Button variant="outlined"  className="mobile-nav-btn" onClick={handleDelete}>Delete</Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Stack className="mobile-nav" direction="row">
        <Button variant="outlined" className="mobile-nav-btn" onClick={questPage}>Back</Button>
      </Stack>
    </>
  );
}

export default DetailsParent;
