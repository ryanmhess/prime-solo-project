import React from 'react';
import QuestParentChildItem from './QuestParentChildItem';

function QuestParentChild({ child }) {
  
  const questText = child.text;
  const questFinish = child.finish;
  const questStart = child.start
  const questScore = child.score;

  const quests = questText.map(function (item, i) {
    return {text: item, start: questStart[i], finish: questFinish[i], score: questScore[i]}
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