import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import { Box, Chip, Divider, Grid, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';

export default function BlogLayout({ children }: any) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { mode } = useContext(ColorModeContext);

  const router = useRouter();

  //get the end of the current URL
  const currentPath = router.asPath.split('/').pop();
  //find blog post data object which has a path field matching that current path
  const BlogPost = BlogPostsCardData.find((post) => post.path === currentPath);

  return (
    <>
      <Box
        className={`${
          mode === 'light' ? 'blogLightContainer' : 'centerFlexBox'
        }`}
        flexDirection="column"
        sx={{ width: '100%' }}
      >
        <Box className={'blogPost'} sx={{ mx: '48px' }}>
          <Paper
            className={`${mode === 'light' ? 'blogPostLight' : 'blogPostDark'}`}
            elevation={8}
          >
            <Box className={'blogBox'}>
              <main>{children}</main>
            </Box>

            {BlogPost && (
              <Box sx={{pt:'8px'}}>
                <Divider sx={{ borderBottomWidth: '2px' }} />
                <Grid
                  container
                  spacing={1}
                  sx={{ alignItems: 'center', py: '24px',px:'16px', textAlign:'center' }}
                >
                  <Grid item >
                  Tagged: 
                  </Grid>
                  {BlogPost.chips?.map((chip, index) => (
                    <Grid item key={chip}>
                      <Chip label={chip} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </>
  );
}
