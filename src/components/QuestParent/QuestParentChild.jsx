import React from 'react';
import QuestParentChildItem from './QuestParentChildItem';

function QuestParentChild({ child }) {
  
  const questText = child.text;
  const questFinish = child.finish;
  const questComplete = child.complete;

  const quests = questText.map(function (item, i) {
    return {text: item, finish: questFinish[i], complete: questComplete[i]}
  })

  return (  
    <ul>{child.username}
      {quests.map((quest, i) => (
        <div key={i}>
          <QuestParentChildItem quest={quest} />
        </div>
      ))}
    </ul>
  );
}

export default QuestParentChild;