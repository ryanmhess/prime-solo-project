import React from 'react';
import { useHistory } from 'react-router-dom';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import DisabledByDefaultTwoToneIcon from '@mui/icons-material/DisabledByDefaultTwoTone';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function QuestParentChildItem({ quest }) {

  const history = useHistory();

  const status = (quest.start === null ? <AccessTimeTwoToneIcon fontSize="large" style={{ color: 'red' }} /> : 
    (quest.finish ? <AccessTimeTwoToneIcon fontSize="large" style={{ color: 'green' }} /> : 
    <AccessTimeTwoToneIcon fontSize="large" style={{ color: 'orange' }} />));
  
  const scored = (quest.score ? <CheckBoxTwoToneIcon fontSize="large" style={{ color: 'green' }} /> : 
    (quest.finish ? <DisabledByDefaultTwoToneIcon fontSize="large" style={{ color: 'orange' }} /> : 
    <DisabledByDefaultTwoToneIcon fontSize="large" style={{ color: 'red' }} />));

  const detailsPage = () => { history.push(`/details/${quest.id}`) }

  return (  
    <>
      {quest.text ? 
        <Stack spacing={5} direction="row" justifyContent="left" alignItems="center"> 
          <Button sx={{opacity: '80%'}} className="details-btn" variant="contained" color="error" onClick={detailsPage}><span>{quest.text}</span></Button>
          {status} 
          {scored}
        </Stack> : "" }
    </>
  );
}

export default QuestParentChildItem;