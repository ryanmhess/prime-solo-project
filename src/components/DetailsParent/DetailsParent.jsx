import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    <Card style={{maxWidth:700, margin:"25% 2.5%", padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Quest Details</Typography>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                Asignee: {details.username}
              </Grid>
              <Grid xs={12} item>
                Title: {details.parent_text}
              </Grid>
              <Grid xs={12} item>
                Description: {details.description}
              </Grid>
              <Grid xs={12} item>
                Status: {status}
              </Grid>
              <Grid xs={12} item>
                Score: {score}
              </Grid>
              <Grid xs={12} item>
                <Stack spacing={0} direction="row">
                  <Grid xs={6} item>
                      <Button variant="outlined" onClick={editPage}>Edit</Button>
                  </Grid>
                  <Grid xs={6} item>
                      <Button variant="outlined" onClick={handleDelete}>Delete</Button>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
      <Stack className="mobile-nav" spacing={0} direction="row">
        <Button variant="outlined" className="mobile-nav-btn" onClick={questPage}>Back</Button>
      </Stack>
      </>
  );
}

export default DetailsParent;
