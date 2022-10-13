import React from 'react';
import { useHistory } from 'react-router-dom';

function DetailsParent() {

  const history = useHistory();

  const questPage = () => { history.push('/quest') };

  return (
    <div>
      <h2>Details Parent</h2>
      
      <nav className="mobile-nav">
        <button className="mobile-nav-btn" onClick={questPage}>
					Quests
				</button>
				<button className="mobile-nav-btn">
          Edit
				</button>
        <button className="mobile-nav-btn">
          Delete
				</button>
      </nav>  
    </div>
  );
}

export default DetailsParent;