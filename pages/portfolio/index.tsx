import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import ProjectCard from '@/src/components/portfolio/Projects/ProjectCard/ProjectCard';
import ProjectData from '@/src/components/portfolio/Projects/ProjectCard/ProjectCardData';
import { Chip, Pagination, Paper, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function Portfolio() {
  //State for Modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const chipData = 
    //flattening each blog post's array of chips into a single array of all chips
    //Afterwards taking the set of that array to get all unique chips
  BlogPostsCardData.flatMap((post) => post.chips);

  return (
    <>
      <Box className="centerBox" sx={{ minHeight: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', mx: 4 }}>
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
              <Typography
                variant={'h5'}
                fontWeight={'500'}
                sx={{ mb: 3 }}
              >
                Projects
              </Typography>
              <Grid container spacing={5}>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={3}>
                    {ProjectData.map((item, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <ProjectCard
                          handleOpen={handleOpen}
                          title={item.title}
                          body={item.body}
                          image={item.image}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper
                    variant={darkMode ? 'outlined' : undefined}
                    elevation={8}
                    sx={{
                      px: 3,
                      pb: 3,
                      mb: 3,
                    }}
                  >
                    <Typography variant='h6' fontWeight={'400'}sx={{ my: 3 }}>
                      Filter by tag
                    </Typography>
                    {chipData.map((label) => (
                      <Chip
                        key={label}
                        label={label}
                        clickable
                        color={'default'}
                        sx={{ mr: 1, mb: 1, borderRadius: '4px' }}
                      />
                    ))}
                  </Paper>
                </Grid>
              </Grid>
              <Pagination
                count={4}
                shape="rounded"
                variant="outlined"
                sx={{ mt: 3 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

{
  /* <Box sx={{ mb: 3 }}>
            {chipData.map((label) => (
              <Chip
                key={label}
                label={label}
                clickable
                color={'default'}
                sx={{ mr: 1, borderRadius: '4px' }}
              />
            ))}
          </Box>
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
            </Box> */
}
