import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestChildItem from './QuestChildItem';

function QuestChild() {

  const dispatch = useDispatch();
  const history = useHistory();

	const userId = useSelector((store) => store.user.id);
  const child = useSelector((store) => store.child[0]);

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

  console.log('user id:', userId);
  console.log('This is CHILD:', child);
  console.log('This is child name:', child?.username);

  const questText = child?.text;
  const questFinish = child?.finish;
  const questStart = child?.start
  const questScore = child?.score;
  const questId = child?.qid;

  const quests = questText?.map(function (item, i) {
    return ({text: item, id: questId[i], start: questStart[i], finish: questFinish[i], score: questScore[i]})
  })

  return (
    <div>
      <h2>Quest Child</h2>
      {child?.username}
      
        <ul>
        {quests?.map((quest, i) => (
          <div key={quest.id}>
            <QuestChildItem quest={quest} />
          </div>
        ))}
        </ul>
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