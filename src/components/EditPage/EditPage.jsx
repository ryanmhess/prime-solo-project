import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function EditPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const details = useSelector((store) => store.details);

  const questId = params.id;

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

  console.log('details:', details);

  const handleCancel = () => { history.push(`/details/${questId}`) };

  const handleConfirm = () => {
    dispatch({
      type: 'UPDATE_QUEST_DETAILS',
      payload: details
    })
  }

  return (
    <div>
      <h2>Edit Details</h2>
      {/* <p>
        <label>Title</label>
        <input 
          type="text" 
          value={details.parent_text} 
          onChange={(e) => dispatch({type: 'EDIT_TITLE', payload: e.target.value})}
        />
      </p> */}
      <p>
        <label>Description</label>
        <input 
          type="text" 
          value={details.description || ''}
          onChange={(e) => dispatch({type: 'EDIT_DESCRIPTION', payload: e.target.value})}
        />
      </p>
      <p>
        <label>Score</label>
        <input 
          type="number" 
          value={details.score || ''}
          onChange={(e) => dispatch({type: 'EDIT_SCORE', payload: Number(e.target.value)})}

        />
      </p>
      <nav className="mobile-nav">
        <button className=  "mobile-nav-btn" onClick={handleCancel}>
					Cancel
				</button>
				<button className="mobile-nav-btn" onClick={handleConfirm}>
          Confirm Changes
				</button>
      </nav>  
    </div>
  );
}

export default EditPage;