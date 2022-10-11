import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  
  const history = useHistory();
  
  const loginPage = () => { history.push('/login') };
  const titlePage = () => { history.push('/title') };

  return (
    <div className="titleBack">
      <RegisterForm />
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={loginPage}>
          Login
        </button>
        <button className="mobile-nav-btn" onClick={titlePage}>
          Back
        </button>
      </nav>  
    </div>
  );
}

export default RegisterPage;
