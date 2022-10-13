import React from 'react';
import { useHistory } from 'react-router-dom';

function QuestParentChildItem({ quest }) {

  const history = useHistory();

  const status = (quest.start === null ? 'Not Started' : (quest.finish ? 'Finished' : 'In Progress'));
  const score = (quest.score ? quest.score : 'No');

  const detailsPage = () => { history.push(`/details/${quest.id}`) }

  return (  
    <>
      {quest.text ? 
        <li> 
          <button onClick={detailsPage}> Type: {quest.text} </button> - Status: {status} - Scored: {score} 
        </li> : "" }
    </>
  );
}

export default QuestParentChildItem;