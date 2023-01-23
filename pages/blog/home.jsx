import BlogAppBar from "../../src/components/blog/BlogAppBar";
import BlogPostsCardData from '@/src/data/BlogPostCardData';
import BlogCard from '@/src/components/blog/BlogCard';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BlogCard2 from '@/src/components/blog/BlogCard2'
import { Divider, Typography } from "@mui/material";


export default function Home() {
  return (<>
      <Box className="centerBox">
      <Typography variant={'h3'} className={"name"}>
							Ryan BeGell
				</Typography>
        <Divider sx={{mb:'32px', pt:'24px', borderBottomWidth:'1.5px' }}/>
        {/* <Grid sx={{ maxWidth: 1150 }}>
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
        </Grid> */}
        <BlogCard2/>
        <BlogCard2/>
        <BlogCard2/>
        <BlogCard2/>
      </Box>

  </>)
}