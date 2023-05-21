import ProjectCard from '@/src/components/portfolio/Projects/ProjectCard/ProjectCard';
import ProjectData from '@/src/components/portfolio/Projects/ProjectCard/ProjectCardData';
import ProjectModal from '@/src/components/portfolio/Projects/ProjectModal/ProjectModal';
import { Typography } from '@mui/material';
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
      <Box className="centerBox">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={'center'}
          alignItems="center"
          textAlign={'center'}
          sx={{ my: 10 }}
        >
          <Typography
            variant={'h5'}
            className={'neutraface'}
            sx={{ mb: 0, color: 'primary.main' }}
          >
            Portfolio
          </Typography>
          <Typography variant={'h3'} className={'neutraface'}>
            <Typography
              variant={'h3'}
              component={'span'}
              className={'neutraface'}
              sx={{ color: 'primary.main' }}
            >
              Explore
            </Typography>{' '}
            my development work
          </Typography>
        </Box>
        <Box>
          <Typography variant={'h4'} className={'neutraface'} sx={{ mb: 3 }}>
            Projects
          </Typography>
          <ProjectModal open={open} handleClose={handleClose} />
          <Box>
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
