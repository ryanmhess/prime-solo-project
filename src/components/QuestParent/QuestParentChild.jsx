import React from 'react';
import QuestParentChildItem from './QuestParentChildItem';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

function QuestParentChild({ child }) {
  
  const questText = child.text;
  const questFinish = child.finish;
  const questStart = child.start
  const questScore = child.score;
  const questId = child.qid;
  const questCategoryId = child.cid;

  const quests = questText.map(function (item, i) {
    return {text: item, id: questId[i], category_id: questCategoryId[i], start: questStart[i], finish: questFinish[i], score: questScore[i]}
  })

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
      // expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1d-content" id="panel1d-header"
    >
      <Typography>{child.username}</Typography>
    </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={16} direction="row" justifyContent="center" alignItems="center">
          <Typography>Category</Typography>
          <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
            <Typography>Status</Typography>
            <Typography>Scored</Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
    {quests.map((quest, i) => (
        <AccordionDetails key={quest.id} direction="column">
          <QuestParentChildItem quest={quest} />
        </AccordionDetails>
      ))}
  </Accordion>
  
  );
}

export default QuestParentChild;

{/* <Stack style={{ margin:"5% 10%" }} direction="column">
<Typography variant="h5">{child.username}</Typography>
{quests.map((quest, i) => (
  <Stack key={quest.id} direction="column">
    <QuestParentChildItem quest={quest} />
  </Stack>
))}
</Stack> */}