import React from 'react';

function QuestParentChildItem({ quest }) {

  return (  
    <>
      {quest.text ? <li><button>Type: {quest.text}</button> - Finish: {quest.finish ? 'Yes' : 'No'} - Complete: {quest.complete ? 'Yes' : 'No'} </li> : "" }
    </>
  );
}

export default QuestParentChildItem;