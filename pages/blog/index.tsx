import BlogCard from '@/src/components/blog/Card/BlogCard';
import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import {
  Divider,
  OutlinedInput,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const { tag } = router.query;
  const theme = useTheme();
  const [tagSelected, setTagSelected] = useState<boolean>(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(
    tag ? String(tag) : null
  );

  const handleChipClick = (label: string) => () => {
    //  Nextjs router query tag uses + for space encoding,
    // swapping spaces for + for consistency to avoid %20 ASCII space encoding
    const encodedTag = label.replace(/\s/g, '+');

    if (label === selectedChip) {
      setSelectedChip(null);
      router.replace('/blog');
      setTagSelected(false);
    } else {
      setSelectedChip(label);
      router.replace(`/blog?tag=${encodedTag}`);
      setTagSelected(true);
    }
  };

  // Allows for url path with query param for path to be used (not from redirect)
  useEffect(() => {
    if (tag) {
      setSelectedChip(tag as string);
      setTagSelected(true);
    } else {
      setSelectedChip(null);
      setTagSelected(false);
    }
  }, [tag]);

  // Array of the set of all blog post chips ( aka tags)
  const chipData = Array.from(
    //flattening each blog post's array of chips into a single array of all chips
    //Afterwards taking the set of that array to get all unique chips
    new Set(BlogPostsCardData.flatMap((post) => post.chips))
  );

  const filteredPosts = selectedChip
    ? BlogPostsCardData.filter((post) => post.chips.includes(selectedChip))
    : BlogPostsCardData;

  const RecentBlogPosts = BlogPostsCardData.slice(0, 1);
  const darkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Box className="centerBox" sx={{ minHeight: '100vh-64px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', mx: 4 }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={'center'}
              alignItems="center"
              textAlign={'center'}
              sx={{ my: 10 }}
            >
              <Typography
                variant={'h5'}
                className={'neutraface'}
                sx={{ mb: 0, color: 'primary.main' }}
              >
                Blog
              </Typography>
              <Typography variant={'h3'} className={'neutraface'}>
                My{' '}
                <Typography
                  variant={'h3'}
                  component={'span'}
                  className={'neutraface'}
                  sx={{ color: 'primary.main' }}
                >
                  latest{' '}
                </Typography>{' '}
                development insights
              </Typography>
            </Box>
            <Box>
              {tagSelected ? (
                <Typography variant={'h4'} className={'neutraface'}>
                  {'Posts tagged as '}
                  <Typography
                    component="span"
                    variant={'h4'}
                    className={'neutraface'}
                    sx={{ color: 'primary.main' }}
                  >
                    {`"${selectedChip}"`}
                  </Typography>
                </Typography>
              ) : (
                <Typography variant={'h4'} className={'neutraface'}>
                  {'Posts'}
                </Typography>
              )}
            </Box>
            <Grid
              container
              spacing={5}
              sx={{ pt: '24px' }}
            >
              <Grid item container xs={12} md={8} spacing={3}>
                {filteredPosts.map((item, index) => (
                  <Fade in={true} timeout={500} key={item.id}>
                    <Grid item xs={12}>
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
              <Grid item xs={12} md={4}>
                <Paper
                  variant={darkMode ? 'outlined' : undefined}
                  elevation={darkMode ? 0 : 8}
                  className="stickyPaper"
                  sx={{
                    px: 3,
                    pb: 2,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight={'400'} sx={{ py: 3 }}>
                    Filter by tag
                  </Typography>
                  <Box sx={{ mt: '8px' }}>
                    {chipData.map((label) => (
                      <Chip
                        key={label}
                        label={label}
                        clickable
                        color={label === selectedChip ? 'primary' : 'default'}
                        onClick={handleChipClick(label)}
                        size="medium"
                        sx={{ mr: 1, mb: 1, borderRadius: '4px' }}
                      />
                    ))}
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <Typography
                    variant="h6"
                    fontWeight={'400'}
                    sx={{ mt: '16px' }}
                  >
                    Keep up to date
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'text.secondary', mb: '16px' }}
                  >
                    Subscribe for email notifications
                  </Typography>
                  <Box sx={{ mb: '4px' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: '12px',
                        color: 'text.secondary',
                        mb: '4px',
                      }}
                    >
                      Enter your email:
                    </Typography>
                    <OutlinedInput
                      id="email"
                      size="small"
                      placeholder="example@email.com"
                      autoComplete="off"
                      fullWidth
                      sx={{
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        },
                      }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{ mt: '4px' }}
                  >
                    {' '}
                    Subscribe
                  </Button>{' '}
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
