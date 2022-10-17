import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

function EditPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const questId = params.id;

  useEffect(() => {
    dispatch({
			type: 'FETCH_QUEST_DETAILS',
			payload: questId,
		})
    dispatch({
			type: 'FETCH_CATEGORIES', 
		})
    // return () => {
    //   dispatch({
    //     type: 'CLEAR_DETAILS'
    //   })
    // }
	}, [questId]);

  const details = useSelector((store) => store.details);
  const categories = useSelector((store) => store.categories);

  const categoryNames = {
    options: categories,
    getOptionLabel: (option) => option.parent_text
  }
  console.log('categories', categories);

  console.log('details', details);
  console.log('category:', details.parent_text);
  console.log('category id:', details.category_id);
  console.log('description:', details.description);

  const handleCancel = () => { history.push(`/details/${questId}`) };
  const handleUpdate = () => {
    dispatch({
      type: 'UPDATE_QUEST',
      payload: details
    })
  }

  return (
    <div>
      <Card style={{maxWidth:700, margin:"25% 2.5%", padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Edit Quest for {details.username}</Typography>
          <form  onSubmit={handleUpdate} className="Customer Info">
            <Grid container spacing={2}>

              <Grid xs={12} item>
                <Autocomplete
                  {...categoryNames}
                  isOptionEqualToValue={(option, value) => option.parent_text === value.parent_text}
                  id="combo-box-demo"
                  autoComplete
                  includeInputInList
                  value={details.parent_text || ''}
                  onChange={(event, newCategory) => dispatch({type: 'EDIT_CATEGORY', payload: newCategory || ''})}
                  renderInput={(params) => ( <TextField {...params} label="Category" placeholder="Select Category" required /> )}
                />
              </Grid>

              <Grid xs={12} item>
                <TextField 
                  required 
                  id="outlined-basic" 
                  type="text" 
                  label="Description" 
                  placeholder="Detailed description goes here" 
                  multiline maxRows={5} 
                  value={details.description || ''}
                  onChange={(event) => dispatch({type: 'EDIT_DESCRIPTION', payload: event.target.value})}
                  fullWidth
                />
              </Grid>

              <Grid xs={12} item>
                <Button type="submit" variant="outlined" className="mobile-nav-btn" >Confirm Changes</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
      <Stack className="mobile-nav" spacing={0} direction="row">
        <Button variant="outlined" className="mobile-nav-btn" onClick={handleCancel}>Cancel</Button>
      </Stack> 
    </div>
  );
}

export default EditPage;