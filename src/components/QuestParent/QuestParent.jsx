import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestParentChild from './QuestParentChild';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function QuestParent() {

  const dispatch = useDispatch();
  const history = useHistory();

	const userId = useSelector((store) => store.user.id);
  const children = useSelector((store) => store.children);

	const userPage = () => { history.push('/user') };
  const createPage = () => { history.push(`/create/${userId}`) };

  useEffect(() => {
		dispatch({
			type: 'FETCH_CHILDREN_DETAILS',
			payload: userId,
		})
    return () => {
      dispatch({
        type: 'CLEAR_CHILDREN'
      })
    }
	}, [userId]);

  return (
    <div className="between-view" >
      
      <Typography className="mobile-title" align="center" variant="h4">Quest Lists</Typography>
      {children.map(child => (
        <div key={child.id}>
          <QuestParentChild child={child} />
        </div>
      ))}
      <Stack className="mobile-nav" direction="row">
        <Button variant="outlined" className="mobile-nav-btn" onClick={userPage}>Home</Button>
        <Button variant="outlined" className="mobile-nav-btn">History</Button>
        <Button variant="outlined" className="mobile-nav-btn" onClick={createPage}>Create</Button>
      </Stack>
      
    </div>
  );
}

export default QuestParent;