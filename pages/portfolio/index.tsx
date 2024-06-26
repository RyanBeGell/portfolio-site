import ProjectCard from '@/src/components/portfolio/Projects/ProjectCard/ProjectCard';
import ProjectData from '@/src/components/portfolio/Projects/ProjectCard/ProjectCardData';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Chip,
  Link,
  Paper,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Portfolio() {
  const router = useRouter();
  const { tag } = router.query;
  const theme = useTheme();
  const [tagSelected, setTagSelected] = useState<boolean>(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(
    tag ? String(tag) : null
  );

  const handleChipClick = (label: string) => () => {
    const encodedTag = label.replace(/\s/g, '+');

    if (label === selectedChip) {
      setSelectedChip(null);
      router.replace('/portfolio');
      setTagSelected(false);
    } else {
      setSelectedChip(label);
      router.replace(`/portfolio?tag=${encodedTag}`);
      setTagSelected(true);
    }
  };

  useEffect(() => {
    if (tag) {
      setSelectedChip(tag as string);
      setTagSelected(true);
    } else {
      setSelectedChip(null);
      setTagSelected(false);
    }
  }, [tag]);

  const chipData = Array.from(
    new Set(ProjectData.flatMap((post) => post.tags))
  );

  const filteredPosts = selectedChip
    ? ProjectData.filter((post) => post.tags.includes(selectedChip))
    : ProjectData;

  const darkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Box className="centerBox" sx={{ minHeight: '100%' }}>
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
              <Typography
                variant={'h3'}
                className={'neutraface'}
                sx={{ my: '10px' }}
              >
                <Typography
                  variant={'h3'}
                  component={'span'}
                  className={'neutraface'}
                  color={`${
                    theme.palette.mode === 'dark' ? 'primary.light' : undefined
                  }`}
                  sx={
                    theme.palette.mode === 'light'
                      ? {
                          background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }
                      : {}
                  }
                >
                  Explore
                </Typography>{' '}
                my development work
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Check out my projects below or browse my code on&nbsp;
                <Tooltip
                  title={
                    <Box display="flex" alignItems={'center'}>
                      <GitHubIcon fontSize="small" sx={{ mr: '4px' }} />
                      RyanBeGell
                    </Box>
                  }
                >
                  <Link
                    href="https://github.com/RyanBeGell"
                    color="inherit"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    GitHub
                  </Link>
                </Tooltip>
              </Typography>
            </Box>
            <Box>
              {tagSelected ? (
                <Typography variant={'h4'} className={'neutraface'}>
                  {'Projects using '}
                  <Typography
                    component="span"
                    variant={'h4'}
                    className={'neutraface'}
                    sx={{ color: 'primary.main' }}
                  >
                    {`"${selectedChip}"`}
                  </Typography>
                </Typography>
              ) : (
                <Typography variant={'h4'} className={'neutraface'}>
                  {'Projects'}
                </Typography>
              )}
            </Box>
            <Grid container spacing={5} sx={{ pt: '24px' }}>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  {filteredPosts.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <ProjectCard
                        title={item.title}
                        body={item.body}
                        subtitle={item.subtitle}
                        image={item.image}
                        githubLink={item.githubLink}
                        demoLink={item.demoLink}
                        tags={item.tags}
                        modalImages={item.modalImages}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  variant={darkMode ? 'outlined' : undefined}
                  elevation={8}
                  className="stickyPaper"
                  sx={{
                    px: 3,
                    pb: 3,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight={'400'} sx={{ py: 3 }}>
                    Filter by tag
                  </Typography>
                  {chipData.map((label) => (
                    <Chip
                      key={label}
                      label={label}
                      clickable
                      color={label === selectedChip ? 'primary' : 'default'}
                      onClick={handleChipClick(label)}
                      sx={{ mr: 1, mb: 1, borderRadius: '4px' }}
                    />
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
