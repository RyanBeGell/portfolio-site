import BlogCard from '@/src/components/blog/Card/BlogCard';
import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import { Divider, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { tag } = router.query;
  const theme = useTheme();

  const [selectedChip, setSelectedChip] = useState<string | null>(
    tag as string | null
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

  const renderChips = () => {
    const chipData = [
      { label: 'React' },
      { label: 'AI' },
      { label: 'Java' },
      { label: 'Spring' },
      { label: 'Node' },
    ];

    // Allows for url path with query param for path to be used (not from redirect)
    useEffect(() => {
      if (tag) {
        setSelectedChip(tag as string);
      } else {
        setSelectedChip(null);
      }
    }, [tag]);

    return chipData.map(({ label }) => (
      <Chip
        key={label}
        label={label}
        clickable
        color={label === selectedChip ? 'primary' : 'default'}
        onClick={handleChipClick(label)}
        sx={{ mr: '8px', my: '8px' }}
      />
    ));
  };

  const filteredPosts = selectedChip
    ? BlogPostsCardData.filter((post) => post.chips.includes(selectedChip))
    : BlogPostsCardData;

  return (
    <>
      <Box className="centerBox" >
        <Box sx={{ maxWidth: '835px',}}>
          <Typography variant={'h3'} className={'name'}>
            Dev Blog
          </Typography>
          <div>{renderChips()}</div>
          <Divider
            sx={{ mb: '24px', pt: '16px', borderBottomWidth: '1.5px' }}
          />
          <Grid container spacing={3}>
            {filteredPosts.map((item, index) => (
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