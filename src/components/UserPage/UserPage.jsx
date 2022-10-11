import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

function UserPage() {
	
	const history = useHistory();
	
	const user = useSelector((store) => store.user);

	const familyPage = () => { history.push('/family') };

	return (
		<div>
			<h2>Welcome, {user.username}!</h2>
			<p>Your ID is: {user.id}</p>
			<p>
				Account Type: {user.is_parent ? "Parent" : "Child"}
			</p>
			<LogOutButton className="btn" />
			<nav className="mobile-nav">
					<button className="mobile-nav-btn" >
					Quest
					</button>
					{user.is_parent ?
						<button className="mobile-nav-btn" onClick={familyPage}>
						Family
						</button>
					: ""}
			</nav>  
		</div>
	);
}

// this allows us to use <App /> in index.js
export default UserPage;
