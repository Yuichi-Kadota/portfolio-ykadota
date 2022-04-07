import About from './01_about';
import Skill from './02_skill';
import Experience from './03_experience';
import Certificate from './04_certificate';
import Contact from './05_contact';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Contents() {
  return (
    <Grid container>
      <About></About>
      <Skill></Skill>
      <Experience></Experience>
      <Certificate></Certificate>
      <Contact></Contact>
    </Grid>
  );
}
