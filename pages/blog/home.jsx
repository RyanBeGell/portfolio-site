import BlogCard from '@/src/components/blog/BlogCard';
import BlogPostsCardData from '@/src/data/BlogPostCardData';
import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <>
      <Box className="centerBox">
        <Box sx={{ maxWidth: '850px' }}>
          <Typography variant={'h3'} className={'name'}>
            Dev Blog
          </Typography>
          <Divider
            sx={{ mb: '24px', pt: '16px', borderBottomWidth: '1.5px' }}
          />
          <Grid container spacing={3}>
            {BlogPostsCardData.map((item, index) => (
              <Grid item>
                {/* Index for key because index won't change; fixed array from data file. */}
                <BlogCard
                  key={index}
                  title={item.title}
                  body={item.body}
                  image={item.image}
                  path={item.path}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
