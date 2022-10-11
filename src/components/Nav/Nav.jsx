import React from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {

  const history = useHistory();

  const loginPage = () => {
    history.push('/login')
  }

  const registrationPage = () => {
    history.push('/registration')
  }

  return (
    <nav className="mobile-nav">
      <button className="mobile-nav-btn" onClick={loginPage}>
        Login
      </button>
      <button className="mobile-nav-btn" onClick={registrationPage}>
        Register
      </button>
    </nav>  
  );
}

export default Nav;
