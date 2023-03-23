import BlogCard from '@/src/components/blog/Card/BlogCard'
import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
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
              <Grid item key={index}>
                <BlogCard
                  title={item.title}
                  body={item.body}
                  image={item.image}
                  path={item.path}
                  date={item.date}
                  chips={item.chips}
                  minsToRead={item.minsToRead}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
