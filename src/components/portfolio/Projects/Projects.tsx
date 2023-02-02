import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import ProjectData from './ProjectCard/ProjectCardData';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectModal from './ProjectModal/ProjectModal';

export default function ProjectsSection() {
  //State for Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ProjectModal open={open} handleClose={handleClose} />
      <Box className="centerBox">
        <Grid sx={{ maxWidth: 1150 }}>
          <SectionTitle title="Projects" />
          <Grid item>
            <Grid container spacing={3} justifyContent="center">
              {ProjectData.map((item) => (
                <ProjectCard
                  key={item.title}
                  handleOpen={handleOpen}
                  title={item.title}
                  body={item.body}
                  image={item.image}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
