import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ParentHome from './ParentHome';
import ChildHome from './ChildHome';

function UserPage() {
	
	const history = useHistory();
	
	const user = useSelector((store) => store.user);
  
	const questPage = () => { history.push('/quest') };
	const familyPage = () => { history.push('/family') };

	return (
		<div>
			<Typography className="mobile-title" align="center" variant="h3">
				<span>Quest - Logger</span>
			</Typography>
      <div className='between-view'>
        {user.is_parent ? 
          <ParentHome /> :
          <ChildHome /> 
        }
      </div>
      <Stack spacing={-20} direction="row" className="mobile-nav">
        {user.is_parent ? 
          <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={familyPage}><span>FAMILY</span></Button>
        : ""}
        <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={questPage}><span>QUESTS</span></Button>
      </Stack>  
		</div>
	);
}

// this allows us to use <App /> in index.js
export default UserPage;
