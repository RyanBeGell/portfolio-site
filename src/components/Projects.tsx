import styles from '@/src/components/Projects.module.css';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

export default function ProjectsGrid() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grow in={open}>
          <Box className={styles.modal} sx={{ bgcolor: 'background.paper' }}>
            <CloseIcon
              fontSize="large"
              onClick={handleClose}
              className={styles.xButton}
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'red', cursor: 'pointer' },
              }}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Yo this is a modal
            </Typography>
          </Box>
        </Grow>
      </Modal>
      <Box className="centerBox">
        <Grid sx={{ maxWidth: 1150 }}>
          <SectionTitle title="Projects" />
          <Grid item>
            <Grid container spacing={4} justifyContent="center">
              <ProjectCard
                handleOpen={handleOpen}
                title="Lizard"
                body="Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all continents except Antarctica"
              />
              <ProjectCard
                handleOpen={handleOpen}
                title="Lizard"
                body="Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all continents except Antarctica"
              />
              <ProjectCard
                handleOpen={handleOpen}
                title="Lizard"
                body="Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all continents except Antarctica"
              />
              <ProjectCard
                handleOpen={handleOpen}
                title="Lizard"
                body="Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all continents except Antarctica"
              />
              <ProjectCard
                handleOpen={handleOpen}
                title="Lizard"
                body="Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all continents except Antarctica"
              />
              <ProjectCard
                handleOpen={handleOpen}
                title="Lizard"
                body="Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all continents except Antarctica"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}