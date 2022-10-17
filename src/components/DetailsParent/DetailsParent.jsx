import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DetailsParent() {

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
  const editPage = () => { history.push(`/edit/${questId}`) };
  const handleDelete = () => {
    console.log('Hi', questId);
    dispatch({
			type: 'DELETE_QUEST',
			payload: questId
		})
    questPage();
  }

  return (
    <div>
      <h2>Details Parent</h2>
      <p>Asignee: {details.username}</p>
      <p>Title: {details.parent_text}</p>
      <p>Description: {details.description}</p>
      <p>Status: {status}</p>
      <p>Score: {score}</p>
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={questPage}>
					Back
				</button>
				<button className="mobile-nav-btn" onClick={editPage}>
          Edit
				</button>
        <button className="mobile-nav-btn" onClick={handleDelete}>
          Delete
				</button>
      </nav>  
    </div>
  );
}

export default DetailsParent;