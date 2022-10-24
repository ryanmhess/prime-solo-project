import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestChildItem from './QuestChildItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

function QuestChild() {

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const quests = useSelector((store) => store.child);

	const userPage = () => { history.push('/user') };

  useEffect(() => {
		dispatch({
			type: 'FETCH_CHILD_DETAILS',
			payload: user.id,
		})
    return () => {
      dispatch({
        type: 'CLEAR_CHILD'
      })
    }
	}, [user.id]);

  return (
    <div className="between-view" sx={{height: '40rem'}}>
      <Typography className="mobile-title" align="center" variant="h4">{user.username}'s Quests</Typography>
      <Stack  direction="column" alignItems="center">
        <Card className="in-between" sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
          <CardContent>
          <Stack spacing={10} direction="row" justifyContent="center" alignItems="center">
              <Typography ><span>CATEGORY</span></Typography>
              <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
                <Typography ><span>STATUS</span></Typography>
                <Typography ><span>SCORED</span></Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack direction="column">
              {quests.map((quest) => (
                <Stack key={quest.quest_id} style={{ margin:"5% 0%" }} direction="column">
                  <QuestChildItem quest={quest} />
                </Stack>
              ))}
              
            </Stack>
            
          </CardContent>
        </Card>
      </Stack>
      <Stack className="mobile-nav" direction="row">
        <Button sx={{opacity: '80%'}} color='error' variant="contained" className="mobile-nav-btn" onClick={userPage}><span>HOME</span></Button>
      </Stack> 
    </div>
  );
}

export default QuestChild;