import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import BlogCard from '../../blog/Card/BlogCard';
import BlogPostCardData from '../../blog/Card/BlogCardData';
import SectionTitle from '../SectionTitle/SectionTitle';

export interface Props {
  themeMode?: string; //Takes in themeMode prop to conditionally render button style
}

export default function RecentBlogPostsSection(props: Props) {
  const { mode } = useContext(ColorModeContext);

  //Get the information from the last 4 blog posts from the data file
  const RecentBlogPosts = BlogPostCardData.slice(0, 4);

  return (
    <>
      <Box className="centerBox">
        <Box sx={{ maxWidth: 1150 }}>
          <Box>
            <SectionTitle title="Recent Blog Posts" />
          </Box>
          <Box sx={{ pb: '48px' }}>
            <Grid item container xs={12} sx={{ width: '100%' }}>
              {RecentBlogPosts.map((post, index) => (
                <Grid
                  item
                  key={index}
                  xl={6}
                  lg={6}
                  md={12}
                  sx={{
                    pb: index < 2 ? '12px' : '0px',
                    pt: index >= 2 ? '12px' : '0px',
                    pr:
                      (index + 1) % 2 === 0
                        ? { xl: '0px', lg: '0px' }
                        : { xl: '12px', lg: '12px' },
                    pl:
                      (index + 1) % 2 === 0
                        ? { xl: '12px', lg: '12px' }
                        : { xl: '0px', lg: '0px' },
                  }}
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
                </Grid>
              ))}
            </Grid>
          </Box>
          <Grid item justifyContent={'center'} textAlign="center">
            {/* Render button outlined in dark mode, contained in light mode */}
            <Link href="/blog">
              <Button
                size="large"
                endIcon={<ArrowCircleRightIcon />}
                variant={`${mode == 'dark' ? 'outlined' : 'contained'}`}
              >
                View Blog
              </Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
