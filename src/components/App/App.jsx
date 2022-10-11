import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import TitlePage from '../TitlePage/TitlePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
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
