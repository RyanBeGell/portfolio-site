import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import BlogPostCardData from '../../blog/Card/BlogCardData';
import BlogCard from '../../blog/Card/BlogCard';
import SectionTitle from '../SectionTitle/SectionTitle';

export interface Props {
  themeMode?: string; //Takes in themeMode prop to conditionally render button style
}

export default function RecentBlogPostsSection(props: Props) {
  const { mode } = useContext(ColorModeContext);
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/blog/home');
  };

  //Get the information from the last 3 blog posts from the data file
  const RecentBlogPosts = BlogPostCardData.slice(
    BlogPostCardData.length - 3,
    BlogPostCardData.length
  );

  return (
    <>
      <Box className="centerBox">
        <Box sx={{ maxWidth: 1150 }}>
          <Box>
            <SectionTitle title="Recent Blog Posts" />
          </Box>
          <Box sx={{ pb: '48px' }}>
            <Grid item container xs={12} sx={{ width: '100%' }}>
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sx={{ pb: '12px', pr: { xl: '12px', lg: '12px' } }}
              >
                <BlogCard />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sx={{ pb: '12px', pl: { xl: '12px', lg: '12px' } }}
              >
                <BlogCard />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sx={{ pt: '12px', pr: { xl: '12px', lg: '12px' } }}
              >
                <BlogCard />
              </Grid>
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sx={{ pt: '12px', pl: { xl: '12px', lg: '12px' } }}
              >
                <BlogCard />
              </Grid>
            </Grid>
          </Box>
          <Grid item justifyContent={'center'} textAlign="center">
            {/* Render button outlined in dark mode, contained in light mode */}
            <Button
              size="large"
              endIcon={<ArrowCircleRightIcon />}
              variant={`${mode == 'dark' ? 'outlined' : 'contained'}`}
              onClick={handleRedirect}
            >
              View Blog
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
