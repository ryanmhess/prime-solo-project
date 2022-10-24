import React from 'react';
import { useHistory } from 'react-router-dom';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import DisabledByDefaultTwoToneIcon from '@mui/icons-material/DisabledByDefaultTwoTone';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function QuestChildItem({ quest }) {

  const history = useHistory();

  const status = (quest.start === null ? <AccessTimeTwoToneIcon fontSize="large" style={{ color: 'red' }} /> : 
    (quest.finish ? <AccessTimeTwoToneIcon fontSize="large" style={{ color: 'green' }} /> : 
    <AccessTimeTwoToneIcon fontSize="large" style={{ color: 'orange' }} />));
  
  const scored = (quest.finish === null ? <CheckBoxTwoToneIcon fontSize="large" style={{ color: 'red' }} /> : 
    (quest.score === null || quest.score === 0 ? <DisabledByDefaultTwoToneIcon fontSize="large" style={{ color: 'orange' }} /> : 
    <DisabledByDefaultTwoToneIcon fontSize="large" style={{ color: 'green' }} />));

  const detailsPage = () => { history.push(`/details/${quest.quest_id}`) }

  return (  
    <>
      {quest.child_text ? 
        <Stack spacing={5} direction="row" alignItems="center">
          <Button sx={{opacity: '80%'}} className="details-btn" variant="contained" color="error" onClick={detailsPage}>{quest.child_text}</Button>
          <Stack  spacing={4} direction="row" alignItems="center">
            {status} 
            {scored}
          </Stack>
        </Stack>
      : "" }
    </>
  );
}

export default QuestChildItem;