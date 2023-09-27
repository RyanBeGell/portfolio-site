import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import { Box, Button, Chip, Divider, Grid, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

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
        sx={{ width: '100%' }}
      >
        <Box className={'blogPost'} sx={{ mx: '48px', mb: '48px', mt: 14 }}>
          <Button
            onClick={() => router.push('/blog')}
            size='small'
            disableFocusRipple
            disableRipple
            sx={{
              alignSelf: 'flex-start',
              my: '16px',
              px:0,
              textTransform: 'none', // Make the text lowercase
              '&:hover': {
                color: mode === 'light'? 'primary.dark' : 'primary.light', // Change text color on hover
                backgroundColor: 'transparent', // Remove the default MUI background color on hover
              },
            }}
          > <KeyboardArrowLeftIcon fontSize='small' sx={{ml:'-8px'}}/> Back to blog</Button>
          <Paper
            className={`${mode === 'light' ? 'blogPostLight' : 'blogPostDark'}`}
            elevation={8}
          >
            <Box className={'blogBox'}>
              <main>{children}</main>
            </Box>

            {BlogPost && (
              <Box sx={{ pt: '8px' }}>
                <Divider />
                <Grid
                  container
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    py: '24px',
                    px: '16px',
                    textAlign: 'center',
                  }}
                >
                  <Grid item>Tagged:</Grid>
                  {BlogPost.chips?.map((chip, index) => (
                    <Grid item key={chip}>
                      <Chip
                        sx={{ borderRadius: '4px' }}
                        label={chip}
                        onClick={() =>
                          router.push({
                            pathname: '/blog',
                            query: { tag: chip },
                          })
                        }
                      />
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
