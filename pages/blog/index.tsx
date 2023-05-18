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
  const [tagActive, setTagActive] = useState<string>('');
  const [tagSelected, setTagSelected] = useState<boolean>(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(
    tag ? String(tag) : null
  );

  const handleChipClick = (label: string) => () => {
    if (label === selectedChip) {
      setSelectedChip(null);
      router.replace('/blog');
      setTagSelected(false);
    } else {
      setSelectedChip(label);
      router.replace(`/blog?tag=${label}`);
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
    // flatMap to flatten the array of chips for each blog post into a single array of all chips, set for uniqueness
    new Set(BlogPostsCardData.flatMap((post) => post.chips))
  );

  const filteredPosts = selectedChip
    ? BlogPostsCardData.filter((post) => post.chips.includes(selectedChip))
    : BlogPostsCardData;

  const RecentBlogPosts = BlogPostsCardData.slice(0, 1);
  const darkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Box className="centerBox" sx={{ minHeight: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', mx: 4 }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={'center'}
              alignItems="center"
              textAlign={'center'}
              sx={{ mt: 10, mb: 7 }}
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
            <Grid
              container
              spacing={5}
              alignItems="flex-start"
              sx={{ pt: '24px' }}
            >
              <Grid item container xs={12} md={8} spacing={3}>
                <Grid item xs={12}>
                  {tagSelected ? (
                    <Typography variant={'h4'} className="neutraface">
                      {'Posts tagged as '}
                      <Typography
                        component="span"
                        variant={'h4'}
                        className="neutraface"
                        sx={{color:'primary.main'}}
                      >
                        {`"${selectedChip}"`}
                      </Typography>
                    </Typography>
                  ) : (
                    <Typography variant={'h4'} className="neutraface">
                      {'Posts'}
                    </Typography>
                  )}
                </Grid>
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
              <Grid item xs={12} md={4} sx={{mt:1}}>
                <Paper
                  variant={darkMode ? 'outlined' : undefined}
                  elevation={8}
                  sx={{
                    px: 3,
                    py: 2,
                    mb: 3,
                  }}
                >
                  <Typography variant="h6">Tags</Typography>
                  <Box sx={{ mt: '8px' }}>
                    {chipData.map((label) => (
                      <Chip
                        key={label}
                        label={label}
                        clickable
                        color={label === selectedChip ? 'primary' : 'default'}
                        onClick={handleChipClick(label)}
                        sx={{ mr: 1, mb: 1, borderRadius: '4px' }}
                      />
                    ))}
                  </Box>
                </Paper>
                <Paper
                  variant={darkMode ? 'outlined' : undefined}
                  elevation={8}
                  sx={{
                    p: 3,
                    mb: 3,
                  }}
                >
                  <Image
                    src="/favicon.png"
                    alt="logo"
                    width={32}
                    height={32}
                    className="hover-pointer"
                  />
                  <Typography variant="h6" sx={{ mt: '16px' }}>
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
