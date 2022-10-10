import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import RemoveChild from './RemoveChild';
import RegisterChild from './RegisterChild';

function UserPage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({
			type: 'FETCH_CHILDREN',
			payload: userId,
		})
	}, []);
	const user = useSelector((store) => store.user);
	const userId = useSelector((store) => store.user.id);
	const children = useSelector((store) => store.children);
	return (
		<div className="container">
			<h2>Welcome, {user.username}!</h2>
			<p>Your ID is: {user.id}</p>
			<p>
                Account Type: {user.is_parent ? "Parent" : "Child"}
            </p>
			<div className="childContainer">
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
                                <RemoveChild child={child}/>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                : ""}    
                {user.is_parent ? 
                    <RegisterChild />
                : ""}  
            </div>
			<LogOutButton className="btn" />
		</div>
	);
}

// this allows us to use <App /> in index.js
export default UserPage;
