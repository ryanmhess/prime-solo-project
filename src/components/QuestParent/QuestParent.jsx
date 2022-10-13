import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestParentChild from './QuestParentChild';

function QuestParent() {

  const dispatch = useDispatch();
  const history = useHistory();

	const userId = useSelector((store) => store.user.id);
  const children = useSelector((store) => store.children);

	const userPage = () => { history.push('/user') };

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

  console.log('This is CHILDREN:', children);

  return (
    <div>
      <h2>Quest Parent</h2>
      {children.map(child => (
        <div key={child.id}>
          <QuestParentChild child={child} />
        </div>
      ))}
      <nav className="mobile-nav">
				<button className="mobile-nav-btn" onClick={userPage}>
				Home
				</button>
				<button className="mobile-nav-btn">
				History
				</button>
        <button className="mobile-nav-btn">
				Create
				</button>
      </nav>  
    </div>
  );
}

export default QuestParent;