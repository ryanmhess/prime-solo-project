import React from 'react';

function QuestParentChildItem({ quest }) {

  const status = (quest.start === null ? 'Not Started' : (quest.finish ? 'Finished' : 'In Progress'));
  const score = (quest.score ? quest.score : 'No');

  const details = () => {
    console.log('The quest id =', quest.id);
  }

  return (  
    <>
      {quest.text ? 
        <li> 
          <button onClick={details}> Type: {quest.text} </button> - Status: {status} - Scored: {score} 
        </li> : "" }
    </>
  );
}

export default QuestParentChildItem;