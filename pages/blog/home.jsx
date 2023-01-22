import BlogAppBar from "../../src/components/blog/BlogAppBar";
import { Box, Grid } from "@mui/material";
import BlogPostsCardData from '@/src/data/BlogPostCardData';
import BlogCard from '@/src/components/blog/BlogCard';
export default function Home() {
  return (<>
      <Box className="centerBox">
        <Grid sx={{ maxWidth: 1150 }}>
          <Grid item>
            <Grid
              container
              spacing={4}
              sx={{ pb: '48px' }}
              justifyContent="center"
            >
              {BlogPostsCardData.map((item) => (
                <BlogCard key={item.title}
                  title={item.title}
                  body={item.body}
                  image={item.image}
                  path={item.path}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
  </>)
}