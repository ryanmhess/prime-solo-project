import React from 'react';
import { useHistory } from 'react-router-dom';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import DisabledByDefaultTwoToneIcon from '@mui/icons-material/DisabledByDefaultTwoTone';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function QuestChildItem({ quest }) {

  const history = useHistory();

  const status = (quest.start === null ? <AccessTimeTwoToneIcon style={{ color: 'red' }} /> : (quest.finish ? <AccessTimeTwoToneIcon style={{ color: 'green' }} /> : <AccessTimeTwoToneIcon style={{ color: 'orange' }} />));
  const scored = (quest.score ? <CheckBoxTwoToneIcon style={{ color: 'green' }} /> : (quest.finish ? <DisabledByDefaultTwoToneIcon style={{ color: 'orange' }} /> : <DisabledByDefaultTwoToneIcon style={{ color: 'red' }} />));

  const detailsPage = () => { history.push(`/details/${quest.id}`) }
  
  return (  
    <>
      {quest.text ? 
        <Stack spacing={5} direction="row" justifyContent="left" alignItems="center">
          <Button className="details-btn" variant="contained" onClick={detailsPage}>{quest.text}</Button>
          {status} 
          {scored}
        </Stack>
      : "" }
    </>
  );
}

export default QuestChildItem;