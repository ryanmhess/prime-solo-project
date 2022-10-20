import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import QuestParentChild from './QuestParentChild';

function QuestParent() {

  const dispatch = useDispatch();
  const history = useHistory();

	const user = useSelector((store) => store.user);
  const children = useSelector((store) => store.children);

	const userPage = () => { history.push('/user') };
  const createPage = () => { history.push(`/create/${user.id}`) };

  console.log('THIS IS CHILDREN::::', children);
  console.log('My User ID is:', user.id);

  useEffect(() => {
		dispatch({
			type: 'FETCH_CHILDREN',
			payload: user.id,
		})
    return () => {
      dispatch({
        type: 'CLEAR_CHILDREN'
      })
    }
	}, [user.id]);

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
        <button className="mobile-nav-btn" onClick={createPage}>
				Create
				</button>
      </nav>  
    </div>
  );
}

export default QuestParent;