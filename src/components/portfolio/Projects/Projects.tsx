import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Button, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useState } from 'react';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectData from './ProjectCard/ProjectCardData';
import ProjectModal from './ProjectModal/ProjectModal';

export default function ProjectsSection() {
  //State for Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const colorMode = theme.palette.mode;

  return (
    <>
      <ProjectModal open={open} handleClose={handleClose} />
      <Box className="centerBox">
        <Box sx={{ maxWidth: 1150 }}>
          <SectionTitle title="Projects" />
          <Grid container spacing={3} justifyContent="center">
            {ProjectData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <ScrollAnimation
                  animation={'fade'}
                  timeout={1000 + index * 500}
                >
                  <ProjectCard
                    handleOpen={handleOpen}
                    title={item.title}
                    body={item.body}
                    image={item.image}
                  />
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
          <Box justifyContent={'center'} textAlign={'center'} sx={{mt:6}}>
            <ScrollAnimation animation={'fade'} timeout={500}>
              <Link href="/portfolio">
                <Button
                  size="large"
                  endIcon={<ArrowCircleRightIcon />}
                  variant={`${colorMode == 'dark' ? 'outlined' : 'contained'}`}
                >
                  View Portfolio
                </Button>
              </Link>
            </ScrollAnimation>
          </Box>
        </Box>
      </Box>
    </>
  );
}
