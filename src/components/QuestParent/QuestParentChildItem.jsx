import React from 'react';

function QuestParentChildItem({ quest }) {

  const status = (quest.start === null ? 'Not Started' : (quest.finish ? 'Finished' : 'In Progress'));
  const score = (quest.score ? quest.score : 'No');

  return (  
    <>
      {quest.text ? 
        <li> 
          <button> Type: {quest.text} </button> - Status: {status} - Scored: {score} 
        </li> : "" }
    </>
  );
}

export default QuestParentChildItem;