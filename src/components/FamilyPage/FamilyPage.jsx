import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FamilyItem from './FamilyItem';

//  function that handles the removal of child account from db
function FamilyPage({ child }) {

	const dispatch = useDispatch();
	const history = useHistory();
	
	const user = useSelector((store) => store.user);
	const userId = useSelector((store) => store.user.id);
	const children = useSelector((store) => store.children);
	
	const homePage = () => { history.push('/user') };
	const addChildPage = () => { history.push('/family/add') };

	useEffect(() => {
		dispatch({
			type: 'FETCH_CHILDREN',
			payload: userId,
		})
	}, []);

	return (
	<>
		<div>
			{user.is_parent ? 
				<table className="childItem">
					<thead>
						<tr>
							<th>Children</th>
						</tr>
					</thead>
					<tbody>
						{children.map(child => (
						<tr key={child.id}>
							<FamilyItem child={child}/>
						</tr>
						))}
					</tbody>
				</table>
			: ""}
		</div>
		<nav className="mobile-nav">
				<button className="mobile-nav-btn" onClick={homePage}>
				Home
				</button>
				<button className="mobile-nav-btn" onClick={addChildPage}>
				Add Child
				</button>
		</nav>
	</>
	)
}

export default FamilyPage;