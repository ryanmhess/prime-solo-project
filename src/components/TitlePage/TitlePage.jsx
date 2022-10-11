import React from 'react';
import { useHistory } from 'react-router-dom';
import './TitlePage.css';

function TitlePage() {
  
  const history = useHistory();
  
  const loginPage = () => {
    history.push('/login');
  };
  const registrationPage = () => {
    history.push('/registration');
  };

  return (
    <div>
      <h2>Title Page</h2>
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={loginPage}>
          Login
        </button>
        <button className="mobile-nav-btn" onClick={registrationPage}>
          Register
        </button>
      </nav>  
    </div>
  );
}

export default TitlePage;
