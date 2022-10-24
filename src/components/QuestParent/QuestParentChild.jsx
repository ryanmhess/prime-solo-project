import React, { useState } from 'react';
import QuestParentChildItem from './QuestParentChildItem';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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

  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === child.id} onChange={handleChange(child.id)}> 
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
        <Typography variant="h4">
          <span>{child.username}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={8} direction="row" justifyContent="center" alignItems="center">
          <Typography>
            <span>CATEGORY</span>
          </Typography>
          <Stack spacing={4} direction="row" justifyContent="center" alignItems="center">
            <Typography>
              <span>STATUS</span>
            </Typography>
            <Typography>
              <span>SCORED</span>
            </Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
      {quests.map((quest) => (
        <AccordionDetails key={quest.id} direction="column">
          <QuestParentChildItem quest={quest} />
        </AccordionDetails>
      ))}
    </Accordion>
  );
}

export default QuestParentChild;