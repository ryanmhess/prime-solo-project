import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//  function that handles the removal of child account from db
function FamilyItem({ child }) {

  const userId = useSelector((store) => store.user.id);
  const dispatch = useDispatch();

  const removeChild = () => {
    // console.log(`This button will remove ${child.username} with ID: ${child.id}.`);
    const childIdToRemove = child.id;
    dispatch({
      type: 'REMOVE_CHILD',
      payload: {childIdToRemove, userId}
    });
  }

  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center">       
        <Grid container spacing={2}>
          <Grid xs={6} item align="center">
          <Typography gutterBottom variant="h5">{child.username}</Typography>
          </Grid>
          <Grid xs={6} item align="center">
            <Button variant="outlined"  className="mobile-nav-btn" onClick={removeChild}>Remove</Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}

export default FamilyItem;