import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage'; //  Not using this at the moment
import UserPage from '../UserPage/UserPage';  //  Similar to TitlePage - Nav to Quest and Family(parent only)
import InfoPage from '../InfoPage/InfoPage';  //  Not using this at the moment
import TitlePage from '../TitlePage/TitlePage'; //  Basic Landing Page - Nav to Login and Registration
import LoginPage from '../LoginPage/LoginPage'; //  Where users login - Nav to Title and Registration
import RegisterPage from '../RegisterPage/RegisterPage';  //  Where new users register - Nav to Title and Login
import FamilyPage from '../FamilyPage/FamilyPage';  //  List of child accounts - Nav to User and FamilyAdd
import FamilyAddPage from '../FamilyAddPage/FamilyAddPage'; //  Registers new child account - Nav to User and Family
import QuestParent from '../QuestParent/QuestParent'; //  List of all children and associated quests - Nav to Home, History and Create
import QuestChild from '../QuestChild/QuestChild';  //  List of quests - Nav to Home and History
import DetailsParent from '../DetailsParent/DetailsParent';
import DetailsChild from '../DetailsChild/DetailsChild';
// import EditPage from '../EditPage/EditPage';
import CreatePage from '../CreatePage/CreatePage';
import './App.css';

function App() {
	
  const dispatch = useDispatch();

	const user = useSelector(store => store.user);

	useEffect(() => {
		dispatch({ type: 'FETCH_USER' });
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Redirect exact from="/" to="/title" />
						{/* Visiting localhost:3000 will redirect to localhost:3000/home */}
					
          <Route exact path="/title" >
						{/* If the user is already logged in, redirect them to the /user page Otherwise, show the Landing page */}
						{user.id ? <Redirect to="/user" /> : <TitlePage /> }
					</Route>
					<Route exact path="/login" >
						{/* If the user is already logged in, redirect to the /user page Otherwise, show the login page */}
						{user.id ? <Redirect to="/user" /> : <LoginPage /> }
					</Route>
					<Route exact path="/registration" >
						{/* If the user is already logged in, redirect them to the /user page Otherwise, show the registration page */}
						{user.id ? <Redirect to="/user" /> : <RegisterPage /> }
					</Route>

					<ProtectedRoute exact path="/user" >	
            {/* logged in shows UserPage else shows TitlePage */}
						<UserPage />
					</ProtectedRoute>
          <ProtectedRoute exact path="/family" >	
            {/* logged in shows FamilyPage else shows TitlePage */}
						{user.is_parent ? <FamilyPage /> : <Redirect to="/user" /> }
					</ProtectedRoute>
          <ProtectedRoute exact path="/family/add" >	
            {/* logged in shows FamilyPage else shows TitlePage */}
						{user.is_parent ? <FamilyAddPage /> : <Redirect to="/user" /> }
					</ProtectedRoute>

          <ProtectedRoute exact path="/quest" >	
            {/* logged in shows QuestParent or QuestChild else shows TitlePage */}
						{user.is_parent ? <QuestParent /> : <QuestChild /> }
					</ProtectedRoute>

          <ProtectedRoute exact path="/create/:id" >	
            {/* logged in shows QuestParent or QuestChild else shows TitlePage */}
						{user.is_parent ? <CreatePage /> : <Redirect to="/quest" /> }
					</ProtectedRoute>

          <ProtectedRoute exact path="/details/:id" >	
            {/* logged in shows QuestParent or QuestChild else shows TitlePage */}
						{user.is_parent ? <DetailsParent /> : <DetailsChild /> }
					</ProtectedRoute>

          {/* <ProtectedRoute exact path="/edit/:id" >	 */}
            {/* logged in shows QuestParent or QuestChild else shows TitlePage */}
						{/* {user.is_parent ? <EditPage /> : <Redirect to="/quest" /> }
					</ProtectedRoute> */}

          <Route exact path="/about" >	// shows AboutPage at all times (logged in or not)
						{/* Visiting localhost:3000/about will show the about page. */}
						<AboutPage />
					</Route>
					<ProtectedRoute exact path="/info" >	
            {/* logged in shows InfoPage else shows TitlePage */}
						<InfoPage />
					</ProtectedRoute>
					<Route>
						{/* If none of the other routes matched, we will show a 404. */}
						<h1>404</h1>
					</Route>
				</Switch>
				{/* <Footer /> */}
        {/* <Nav /> */}
			</div>
		</Router>
	);
}

export default App;
