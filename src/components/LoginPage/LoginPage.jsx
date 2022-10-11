import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

function LoginPage() {

  const history = useHistory();
  const titlePage = () => { history.push('/title') };
  const registrationPage = () => { history.push('/registration') };

  return (
    <div className="titleBack">
      <LoginForm />
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={titlePage}>
          Back
        </button>
        <button className="mobile-nav-btn" onClick={registrationPage}>
          Register
        </button>
      </nav> 
    </div>
  );
}

export default LoginPage;
