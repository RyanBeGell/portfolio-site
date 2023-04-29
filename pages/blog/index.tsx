import BlogCard from '@/src/components/blog/Card/BlogCard';
import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import { Divider, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { tag } = router.query;
  const theme = useTheme();

  const [selectedChip, setSelectedChip] = useState<string | null>(
    tag ? String(tag) : null
  );

  const handleChipClick = (label: string) => () => {
    if (label === selectedChip) {
      setSelectedChip(null);
      router.replace('/blog');
    } else {
      setSelectedChip(label);
      router.replace(`/blog?tag=${label}`);
    }
  };

  // Allows for url path with query param for path to be used (not from redirect)
  useEffect(() => {
    if (tag) {
      setSelectedChip(tag as string);
    } else {
      setSelectedChip(null);
    }
  }, [tag]);

  // Array of the set of all blog post chips ( aka tags)
  const chipData = Array.from(
    // flatMap to flatten the array of chips for each blog post into a single array of all chips, set for uniqueness
    new Set(BlogPostsCardData.flatMap((post) => post.chips))
  );

  const filteredPosts = selectedChip
    ? BlogPostsCardData.filter((post) => post.chips.includes(selectedChip))
    : BlogPostsCardData;

  return (
    <>
      <Box className="centerBox" sx={{ mt: '64px' }}>
        <Box sx={{ maxWidth: '835px' }}>
          <Typography variant={'h3'} className={'name'}>
            Dev Blog
          </Typography>
          <div>
            {chipData.map((label) => (
              <Chip
                key={label}
                label={label}
                clickable
                color={label === selectedChip ? 'primary' : 'default'}
                onClick={handleChipClick(label)}
                sx={{ mr: '8px', my: '8px' }}
              />
            ))}
          </div>
          <Divider
            sx={{ mb: '24px', pt: '16px', borderBottomWidth: '1.5px' }}
          />
          <Grid container spacing={3}>
            {filteredPosts.map((item, index) => (
              <Fade in={true} timeout={500} key={index}>
                <Grid item>
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
              </Fade>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
