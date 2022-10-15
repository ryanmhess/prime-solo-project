import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';


function CreatePage() {

  const [child, setChild] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((store) => store.user.id);
  const categories = useSelector((store) => store.categories);
  const children = useSelector((store) => store.children);

  const childNames = {
    options: children,
    getOptionLabel: (option) => option.username
  }

  const categoryNames = {
    options: categories,
    getOptionLabel: (option) => option.parent_text
  }

  const questPage = () => { 
    dispatch({
      type: 'CLEAR_CHILDREN'
    })
    history.push('/quest') 
  };

  const testOnePage = () => { console.log('Category Selected:', category); };
  const testTwoPage = () => { console.log('Child Selected:', child); };

  useEffect(() => {
		dispatch({
			type: 'FETCH_CATEGORIES', 
		})
    dispatch({
			type: 'FETCH_CHILDREN',
      payload: userId 
		})
	}, [userId]);

  const handleCreate = (event) => {
    event.preventDefault();
    console.log('Hi!');
    console.log(description);
    dispatch({
      type: 'CREATE_QUEST',
      payload: {
        child_id: child.id,
        category_id: category.id,
        description: description
      }
    })
    dispatch({
      type: 'CLEAR_CHILDREN'
    })
    setChild(null);
    setCategory(null);
    setDescription('');
    questPage();
  }

  return (
    <div>
      <Card style={{maxWidth:700, margin:"25% 2.5%", padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Create Quest</Typography>
          <form onSubmit={handleCreate} className="Customer Info">
            <Grid container spacing={2}>

              <Grid xs={12} item>
                <Autocomplete
                  {...childNames}
                  id="combo-box-demo"
                  autoComplete
                  includeInputInList
                  value={child}
                  onChange={(event, newChild) => { setChild(newChild); }}
                  renderInput={(params) => ( <TextField {...params} label="Child" /> )}
                />
              </Grid>

              <Grid xs={12} item>
                <Autocomplete
                  {...categoryNames}
                  id="combo-box-demo"
                  autoComplete
                  includeInputInList
                  value={category}
                  onChange={(event, newCategory) => { setCategory(newCategory); }}
                  renderInput={(params) => ( <TextField {...params} label="Category" /> )}
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
                  value={description}
                  onChange={(event) => { setDescription(event.target.value); }}
                  fullWidth
                />
              </Grid>

              <Grid xs={12} item>
                <Button type="submit" variant="outlined" className="mobile-nav-btn" >Create</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
      <Stack className="mobile-nav" spacing={0} direction="row">
        <Button variant="outlined" className="mobile-nav-btn" onClick={questPage}>Cancel</Button>
        <Button variant="outlined" className="mobile-nav-btn" onClick={testTwoPage}>Child</Button>
        <Button variant="outlined" className="mobile-nav-btn" onClick={testOnePage}>Category</Button>
      </Stack> 
    </div>
  );
}

export default CreatePage;