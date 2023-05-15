import ProjectCard from '@/src/components/portfolio/Projects/ProjectCard/ProjectCard';
import ProjectData from '@/src/components/portfolio/Projects/ProjectCard/ProjectCardData';
import ProjectModal from '@/src/components/portfolio/Projects/ProjectModal/ProjectModal';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function Portfolio() {
  //State for Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className="centerBox" sx={{ mt: '64px' }}>
        <Box sx={{}}>
          <Typography variant={'h3'} className={'name'}>
            Portfolio
          </Typography>
          <Divider
            sx={{ mb: '24px', pt: '16px', borderBottomWidth: '1.5px' }}
          />
          <ProjectModal open={open} handleClose={handleClose} />
          <Box className="centerBox">
            <Box sx={{ maxWidth: 1000 }}>
              <Grid container spacing={3} justifyContent="center">
                {ProjectData.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                    <ProjectCard
                      handleOpen={handleOpen}
                      title={item.title}
                      body={item.body}
                      image={item.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
