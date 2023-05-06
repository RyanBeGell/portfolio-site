import BlogCard from '@/src/components/blog/Card/BlogCard';
import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import {
  Divider,
  OutlinedInput,
  Paper,
  Typography,
  createSvgIcon,
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

  const darkMode = theme.palette.mode === 'dark';

  return (
    <>
      <Box className="centerBox" sx={{ mt: '64px', minHeight: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', mx: 4 }}>
            <Typography variant={'h3'} className={'name'}>
              Dev Blog
            </Typography>
            <Grid
              container
              spacing={5}
              alignItems="flex-start"
              sx={{ pt: '24px' }}
            >
              <Grid item container xs={12} md={8} spacing={3}>
                <Grid item xs={12} sx={{ maxHeight: '1px' }}>
                  <Divider />
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
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={8}
                  sx={{
                    px: 3,
                    py: 2,
                    mb: 3,
                    border: `${darkMode ? '1px solid #1e4976' : ''}`,
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
                  elevation={8}
                  sx={{
                    p: 3,
                    mb: 3,
                    border: `${darkMode ? '1px solid #1e4976' : ''}`,
                  }}
                >
                  <Image
                    src="/favicon.png"
                    alt="logo"
                    width={32}
                    height={32}
                    className="hover-pointer"
                  />
                  <Typography
                    variant="inherit"
                    sx={{ mt: '16px', fontWeight: 'bold' }}
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
