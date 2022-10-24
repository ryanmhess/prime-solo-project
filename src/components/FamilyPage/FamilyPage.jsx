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
import Divider from '@mui/material/Divider';
import FamilyAddForm from '../FamilyAddPage/FamilyAddForm';

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
		<Typography className="mobile-title" align="center" variant="h3">
      <span>Quest - Logger</span>
    </Typography>				
		<div className='between-view'>
			<Stack direction="column" spacing={-2} alignItems="center">
				<Card sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
					<CardContent>
						<Typography align="center" gutterBottom variant="h4"><span>REGISTER CHILD</span></Typography>
						<FamilyAddForm />
					</CardContent>
				</Card>
				<Card sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
					<CardContent>
						<Typography align="center" gutterBottom variant="h4"><span>CHILD ACCOUNTS</span></Typography>
						<Divider />
							<Grid sx={{mt: 0.5}} container spacing={2}>
								{children.map(child => (
								<Grid xs={12} item key={child.id}>
									<FamilyItem child={child}/>
								</Grid>
								))}
							</Grid>
					</CardContent>
				</Card>
			</Stack>
		</div>
		<Stack className="mobile-nav" direction="row">
        <Button sx={{opacity: '80%'}} color='error' variant="contained" className="mobile-nav-btn" onClick={homePage}><span>BACK</span></Button>
    </Stack>
	</>
	)
}

export default FamilyPage;