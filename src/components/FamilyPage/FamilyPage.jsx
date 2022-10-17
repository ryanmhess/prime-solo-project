import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FamilyItem from './FamilyItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//  function that handles the removal of child account from db
function FamilyPage() {

	const dispatch = useDispatch();
	const history = useHistory();
	
	const user = useSelector((store) => store.user);
	const userId = useSelector((store) => store.user.id);
	const children = useSelector((store) => store.children);
	
	const homePage = () => { history.push('/user') };
	const addChildPage = () => { history.push('/family/add') };

	useEffect(() => {
		dispatch({
			type: 'FETCH_CHILDREN',
			payload: userId,
		})
		return () => {
      dispatch({
        type: 'CLEAR_CHILDREN'
      })
    }
	}, [userId]);

	return (
	<>
						
		{user.is_parent ? 
			<Card style={{maxWidth:700, margin:"25% 2.5%", padding: "20px 5px"}}>
        <CardContent>
          <Typography align="center" gutterBottom variant="h4">Child Accounts</Typography>
            <Grid container spacing={2}>
              {children.map(child => (
							<Grid xs={12} item key={child.id}>
								<FamilyItem child={child}/>
							</Grid>
							))}
							
              
              <Grid xs={12} item>
              </Grid>
              <Grid xs={12} item>
              </Grid>
              <Grid xs={12} item>
              </Grid>
              <Grid xs={12} item>
              </Grid>
              <Grid xs={12} item>
                <Stack style={{padding: "20px 0px 0px 0px"}} spacing={7} direction="row" justifyContent="center" alignItems="center">
                      <Button variant="outlined"  className="mobile-nav-btn" onClick={addChildPage}>Add Child</Button>
                </Stack>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
		: ""}
		<Stack className="mobile-nav" direction="row">
        <Button variant="outlined" className="mobile-nav-btn" onClick={homePage}>Back</Button>
    </Stack>
	</>
	)
}

export default FamilyPage;