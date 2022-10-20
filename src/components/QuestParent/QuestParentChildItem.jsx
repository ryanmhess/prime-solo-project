import React from 'react';
import { useHistory } from 'react-router-dom';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import DisabledByDefaultTwoToneIcon from '@mui/icons-material/DisabledByDefaultTwoTone';

function QuestParentChildItem({ quest }) {

  console.log('I AM IN THE ITEM PART ::::', quest);
  const history = useHistory();

  const status = (quest.start === null ? <AccessTimeTwoToneIcon style={{ color: 'red' }} /> : (quest.finish ? <AccessTimeTwoToneIcon style={{ color: 'green' }} /> : <AccessTimeTwoToneIcon style={{ color: 'orange' }} />));
  const scored = (quest.score ? <CheckBoxTwoToneIcon style={{ color: 'green' }} /> : (quest.finish ? <DisabledByDefaultTwoToneIcon style={{ color: 'orange' }} /> : <DisabledByDefaultTwoToneIcon style={{ color: 'red' }} />));

  const detailsPage = () => { history.push(`/details/${quest.quest_id}`) }

  return (  
    <>
      {quest.parent_text ? 
        <li> 
          <button onClick={detailsPage}> Type: {quest.parent_text} </button>  {status}  {scored} 
        </li> : "" }
    </>
  );
}

export default QuestParentChildItem;