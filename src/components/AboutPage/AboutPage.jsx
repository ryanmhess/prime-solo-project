import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import swal from 'sweetalert';

function AboutPage() {
  
  const history = useHistory();

  const handleBack = () => {
    history.push('/title');
  }
  return (
    <div>
      <Typography className="mobile-title" align="center" variant="h3">
        <span>Quest - Logger</span>
      </Typography>
      <div className='between-view'>
        <Stack direction="column" spacing={-2} alignItems="center">
        <Card sx={{ width: '80%', my: '10%', mt: 5, opacity: '80%'}}>
          <CardContent>
            <Typography variant="h5" component="div" align='center' >
              <span>- ABOUT -</span>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
              <span>Technologies Used:</span>
              <li><span>JavaScript</span></li>
              <li><span>HTML</span></li>
              <li><span>CSS</span></li>
              <li><span>React</span></li>
              <li><span>Redux</span></li>
              <li><span>Saga</span></li>
              <li><span>Node</span></li>
              <li><span>Express</span></li>
              <li><span>PostreSQL</span></li>
              <li><span>Material UI</span></li>
              <li><span>SweetAlerts</span></li>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
              <span> PURPOSE: </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" align='justify'>
              <span>
                Every weekend when we try to do our household chores as a family, 
                we almost always run into resistance. But, I was a kid once and I 
                get it! Chores are boring! This is where Quest-Logger comes in. 
                Instead of assigning the kids chores, I assign them QUESTS to 
                undertake. Having a list of quests assinged to them gives them a 
                better understanding of the tasks to complete. Throw in some 
                points and a 'HIGH SCORE' to battle your siblings for all in the 
                name of chores .. ehrm .. quests, who could resist!
              </span>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
              <span> CHALLENGES: </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" align='justify'>
              <span>
                One of the difficulties I encountered while designing Quest-Logger 
                was the Parent to Child account relationship. It was exceptionally 
                difficult when attempting to map out each child and their current 
                quests on the parent side account. A little SQL magic, taming 
                that map function and the rest was history!
              </span>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
              <span> FUTURE GOALS: </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" align='justify'>
              <span>
                I would like to further develop Quest-Logger to include a more indepth 
                look into the quests completed, scores achieved and time needed to complete 
                certain quests. Having a page to display this data graphically may help 
                both the parent and the child have a better understanding of the work they 
                are doing and where they excel vs need improvement.
              </span>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" align='justify'>
              <span> THANKS: </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" align='justify'>
              <span>
                First I would like to thank my wife and kids for allowing me the opportunity
                to make this career shift despite the long hours and late nights and also for 
                the inspiration in creating Quest-Logger.
              </span>
            </Typography>
            <Typography sx={{ mt: 1.5, mb: 1.5 }} variant="body1" color="text.secondary" align='justify'>
              <span>
                Next I would like to the everyone from the L'Engle cohort for allowing me to 
                be apart of such a great group of adventurers taking on this journey with me 
                and always being their to help one-another when we struggle.
              </span>
            </Typography>
            <Typography variant="body1" color="text.secondary" align='justify'>
              <span>
                And thank you to Matt Black and the rest of the Prime staff for pushing us to 
                excel and supporting us on this brain melting quest to change our futures!
              </span>
            </Typography>
          </CardContent>
        </Card>
        </Stack>
      </div>
      <Stack direction="row" className="mobile-nav">
        
        <Button sx={{opacity: '80%'}} color="error" variant="contained" className="mobile-nav-btn" onClick={handleBack}><span>BACK</span></Button>
      </Stack>
    </div>
  );
}

export default AboutPage;
