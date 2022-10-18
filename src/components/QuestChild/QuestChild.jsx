import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestChildItem from './QuestChildItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function QuestChild() {

  const dispatch = useDispatch();
  const history = useHistory();

	const userId = useSelector((store) => store.user.id);
  const child = useSelector((store) => store.child);

	const userPage = () => { history.push('/user') };

  useEffect(() => {
		dispatch({
			type: 'FETCH_CHILD_DETAILS',
			payload: userId,
		})
    return () => {
      dispatch({
        type: 'CLEAR_CHILD'
      })
    }
	}, [userId]);

  const questText = child.text || [];
  const questFinish = child.finish;
  const questStart = child.start
  const questScore = child.score;
  const questId = child.qid;

  const quests = questText.map(function (item, i) {
    return ({text: item, id: questId[i], start: questStart[i], finish: questFinish[i], score: questScore[i]})
  })

  return (
    <div>
      <Typography className="mobile-title" align="center" variant="h4">{child.username}'s Quests</Typography>
      <Stack spacing={5} direction="row" justifyContent="left" alignItems="center">
        <Typography variant="h5">Category</Typography>
        <Typography variant="h5">Status</Typography>
        <Typography variant="h5">Scored</Typography>
      </Stack>
      <Stack style={{ margin:"25% 5%" }} direction="column">
        {quests.map((quest, i) => (
          <Stack key={quest.id} style={{ margin:"5% 0%" }} direction="column">
            <QuestChildItem quest={quest} />
          </Stack>
        ))}
      </Stack>
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={userPage}>
				Home
				</button>
				<button className="mobile-nav-btn">
				History
				</button>
      </nav>  
    </div>
  );
}

export default QuestChild;