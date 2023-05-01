import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import ScrollAnimation from '../../ScrollAnimation';
import BlogCard from '../../blog/Card/BlogCard';
import BlogPostCardData from '../../blog/Card/BlogCardData';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useMediaQuery, useTheme } from '@mui/material';

export default function RecentBlogPostsSection( ) {

  //Get the information from the last 4 blog posts from the data file
  const RecentBlogPosts = BlogPostCardData.slice(0, 4);
  const theme = useTheme();
  const mdScreenOrLower = useMediaQuery(theme.breakpoints.down('md'));
  const colorMode = theme.palette.mode;

  return (
    <Box className="centerBox">
      <Box sx={{ maxWidth: 1150 }}>
        <SectionTitle title="Recent Blog Posts" />
        <Box sx={{ pb: '48px' }}>
          <Grid container spacing={3}>
            {RecentBlogPosts.map((post, index) => (
              <Grid item key={index} xl={6} lg={6} md={6}>
                <ScrollAnimation
                  animation={'fade'}
                  //Above md screen has a 2v2 grid, so stagger animation for 2nd in each grid row with index%2 
                  timeout={mdScreenOrLower ? 1000 + index * 500 : 1000 + index%2 * 500}
                >
                  <BlogCard
                    key={index}
                    title={post.title}
                    body={post.body}
                    image={post.image}
                    path={post.path}
                    date={post.date}
                    chips={post.chips}
                    minsToRead={post.minsToRead}
                  />
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Grid item justifyContent={'center'} textAlign="center">
          {/* Render button outlined in dark mode, contained in light mode */}
          <ScrollAnimation animation={'fade'} timeout={500}>
            <Link href="/blog">
              <Button
                size="large"
                endIcon={<ArrowCircleRightIcon />}
                variant={`${colorMode == 'dark' ? 'outlined' : 'contained'}`}
              >
                View Blog
              </Button>
            </Link>
          </ScrollAnimation>
        </Grid>
      </Box>
    </Box>
  );
}
