import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Divider from '@mui/material/Divider';
import swal from 'sweetalert';

//  function that handles the removal of child account from db
function FamilyItem({ child }) {

  const userId = useSelector((store) => store.user.id);
  const dispatch = useDispatch();

  const removeChild = () => {
    // console.log(`This button will remove ${child.username} with ID: ${child.id}.`);
    const childIdToRemove = child.id;
    swal({
      title: "Are you sure?",
      text: "Once deleted, this child username will be removed from your list.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Username Removed.", {
          icon: "success",
        });
        dispatch({
          type: 'REMOVE_CHILD',
          payload: {childIdToRemove, userId}
        });
      } else {
        swal("Your child username is safe!");
      }
    });
  }

  return (
    <>
      <Stack direction="row" justifyContent="center" alignItems="center">       
        <Grid container spacing={2}>
          <Grid xs={6} item align="center">
          <Typography gutterBottom variant="h5"><span>{child.username}</span></Typography>
          </Grid>
          <Grid xs={6} item align="center">
            <DeleteTwoToneIcon color='error' onClick={removeChild}/>
          </Grid>
        </Grid>
      </Stack>
      <Divider />
    </>
  )
}

export default FamilyItem;