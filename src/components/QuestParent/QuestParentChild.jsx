import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuestParentChildItem from './QuestParentChildItem';

function QuestParentChild({ child }) {
  
  const dispatch = useDispatch();
  const childId = child.id || '';
  useEffect(() => {
    dispatch({
      type: 'FETCH_QUESTS',
			payload: childId,
		})
  }, [childId]);
      
      const quests = useSelector((store) => store.quests);
      console.log(`I am ${child.username}, my user ID is ${child.id} and these are my quests:`, quests);
  return (  
    <ul>{child.username}
      {quests.map((quest) => (
        <div key={quest.quest_id}>
          <QuestParentChildItem quest={quest} />
        </div>
      ))}
    </ul>
  );
}

export default QuestParentChild;