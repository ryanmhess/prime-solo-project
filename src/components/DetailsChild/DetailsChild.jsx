import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DetailsChild() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const details = useSelector((store) => store.details);

  const questId = params.id;
  const status = (details.start === null ? 'Not Started' : (details.finish ? 'Finished' : 'In Progress'));
  const score = (details.score ? details.score : (details.finish ? 'Score Pending' : 'Complete Quest For Score'));
  
  useEffect(() => {
    dispatch({
			type: 'FETCH_QUEST_DETAILS',
			payload: questId,
		})
    return () => {
      dispatch({
        type: 'CLEAR_DETAILS'
      })
    }
	}, [questId]);

  const questPage = () => { history.push('/quest') };

  return (
    <div>
      <h2>Details Child</h2>
      <p>Title: {details.child_text}</p>
      <p>Description: {details.description}</p>
      <p>Status: {status}</p>
      <p>Score: {score}</p>
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={questPage}>
					Quests
				</button>
				<button className="mobile-nav-btn">
          Start
				</button>
      </nav>  
    </div>
  );
}

export default DetailsChild;