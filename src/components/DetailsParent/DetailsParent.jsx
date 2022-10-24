import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import swal from 'sweetalert';

function DetailsParent() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [edit, setEdit] = useState(false);
  const [score, setScore] = useState(null);
  const details = useSelector((store) => store.details);
  const categories = useSelector((store) => store.categories);

  const questId = params.id;
  const status = (details.start === null ? 'Not Started' : (details.finish ? 'Finished' : 'In Progress'));
  const scoreCheck = (details.score === null || details.score === 0 ? (details.finish ? 'Score Pending' : 'Complete Quest For Score') : (details.score === null || details.score === 0 ? score : details.score));
  
  console.log('scoreVal: ', Number(score));

  useEffect(() => {
    dispatch({
			type: 'FETCH_QUEST_DETAILS',
			payload: questId,
		})
    dispatch({
			type: 'FETCH_CATEGORIES', 
		})
    return () => {
      dispatch({
        type: 'CLEAR_DETAILS'
      })
    }
	}, [questId]);
  
  const categoryNames = {
    options: categories,
    getOptionLabel: (option) => option.parent_text || ''
  }

  const handleEdit = () => { 
    // history.push(`/edit/${questId}`)
    console.log('edit =>', edit);
    setEdit(!edit);
  };
  
  const handleConfirm = () => {
    details.score = score;
    swal({
      title: "Are you sure?",
      text: "This will apply the changes made.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Quest Updated", {
          icon: "success",
        });
        dispatch({
          type: 'UPDATE_QUEST',
          payload: details
        })
        setEdit(!edit);
      } else {
        swal("No changes made.");
      }
    });
  }
  
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, this quest will be removed from your childs list.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Quest Deleted", {
          icon: "success",
        });
        dispatch({
          type: 'DELETE_QUEST',
          payload: questId
        })
        handleBack();
      } else {
        swal("This quest is safe!");
      }
    });
  };
  
    const handleCancel = () => { 
    setEdit(!edit);
  };
  
  const handleBack = () => {
    history.push('/quest');
  };

  return (
    <div className="between-view">
      <Typography className="mobile-title" align="center" variant="h4">
        {!edit ? <span>QUEST DETAILS</span> : <span>EDIT QUEST DETAILS</span>}
      </Typography>
      <Stack direction="column" alignItems="center">
        <Card sx={{  width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  error
                  variant="filled"
                  id="outlined-read-only-input"
                  label="Child:"
                  value={details.username || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                {!edit ?
                <TextField
                  fullWidth
                  error
                  variant="filled"
                  id="outlined-read-only-input"
                  label="Category:"
                  value={details.parent_text || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                :
                <Autocomplete
                  {...categoryNames}
                  isOptionEqualToValue={(option, value) => option.parent_text === value.parent_text}
                  id="combo-box-demo"
                  autoComplete
                  includeInputInList
                  value={{id: details.category_id, parent_text: details.parent_text, child_text: details.child_text }}
                  onChange={(event, newCategory) => dispatch({type: 'EDIT_CATEGORY', payload: newCategory})}
                  renderInput={(params) => ( <TextField {...params} label="Category" placeholder="Select Category" required error/> )}
                />
                }
              </Grid>
              <Grid xs={12} style={{margin: 'auto'}} item>
                {!edit ?
                <TextField
                  fullWidth
                  error
                  variant="filled"
                  id="outlined-read-only-input"
                  label="Description:"
                  value={details.description || ''}
                  multiline
                  rows={5}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                :
                <TextField 
                  required 
                  error
                  id="outlined-basic" 
                  type="text" 
                  label="Description" 
                  placeholder="Detailed description goes here" 
                  multiline 
                  rows={5} 
                  value={details.description || ''}
                  onChange={(event) => dispatch({type: 'EDIT_DESCRIPTION', payload: event.target.value})}
                  fullWidth
                />
                }
              </Grid>
              <Grid xs={12} item>
                <TextField
                  fullWidth
                  error
                  variant="filled"
                  id="outlined-read-only-input"
                  label="Status:"
                  value={status || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid xs={12} item>
                {!edit ?
                <TextField
                  fullWidth
                  error
                  variant="filled"
                  id="outlined-read-only-input"
                  label="Score:"
                  value={scoreCheck || ''}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                :
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label" error >Score:</FormLabel>
                  <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel className="radio-btn-control" value={100} control={<Radio className="radio-btn" color="error" size="small" required/>} label="Poor" labelPlacement="top" onChange={(event) => setScore(event.target.value)}/>
                    <FormControlLabel className="radio-btn-control" value={200} control={<Radio className="radio-btn" color="error" size="small" />} label="<---" labelPlacement="top" onChange={(event) => setScore(event.target.value)}/>
                    <FormControlLabel className="radio-btn-control" value={300} control={<Radio className="radio-btn" color="error" size="small" />} label="----" labelPlacement="top" onChange={(event) => setScore(event.target.value)}/>
                    <FormControlLabel className="radio-btn-control" value={400} control={<Radio className="radio-btn" color="error" size="small" />} label="--->" labelPlacement="top" onChange={(event) => setScore(event.target.value)}/>
                    <FormControlLabel className="radio-btn-control" value={500} control={<Radio className="radio-btn" color="error" size="small" />} label="Great" labelPlacement="top" onChange={(event) => setScore(event.target.value)}/>
                  </RadioGroup>
                </FormControl>
                }
              </Grid>
              <Grid xs={12} item>
                <Stack spacing={7} direction="row" justifyContent="center" alignItems="center">
                  {!edit ? <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleEdit}><span>EDIT</span></Button> 
                    : <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleConfirm}><span>CONFIRM</span></Button>
                  }
                  {!edit ? <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleDelete}><span>DELETE</span></Button> 
                    : <Button sx={{opacity: '80%'}} color='error' variant="contained" onClick={handleCancel}><span>CANCEL</span></Button>
                  }
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

export default DetailsParent;
