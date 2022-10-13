import React from 'react';
import { useHistory } from 'react-router-dom';

function DetailsChild() {

  const history = useHistory();

  const questPage = () => { history.push('/quest') };

  return (
    <div>
      <h2>Details Child</h2>
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={questPage}>
					Quests
				</button>
				<button className="mobile-nav-btn">
          Start
				</button>
      </nav>  
    </div>
  );
}

export default DetailsChild;