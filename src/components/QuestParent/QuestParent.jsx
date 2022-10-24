import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestParentChild from './QuestParentChild';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
    <div className="between-view" sx={{height: '40rem'}}>
      <Typography className="mobile-title" align="center" variant="h4"><span>QUEST LISTS</span></Typography>
      <Stack  direction="column" alignItems="center">
        <Card className="in-between" sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
          {children.map(child => (
            <CardContent key={child.id}>
              <QuestParentChild child={child} />
            </CardContent>
          ))}
        </Card>
      </Stack>
      <Stack spacing={-20} className="mobile-nav" direction="row">
        <Button sx={{opacity: '80%'}} color='error' variant="contained" className="mobile-nav-btn" onClick={userPage}><span>HOME</span></Button>
        <Button sx={{opacity: '80%'}} color='error' variant="contained" className="mobile-nav-btn" onClick={createPage}><span>CREATE</span></Button>
      </Stack>
    </div>
  );
}

export default QuestParent;