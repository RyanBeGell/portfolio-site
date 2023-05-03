import BlogCard from '@/src/components/blog/Card/BlogCard';
import BlogPostsCardData from '@/src/components/blog/Card/BlogCardData';
import {
  Divider,
  IconButton,
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
  const CodePenIcon = createSvgIcon(
    <svg viewBox="0 0 128 128">
      <path d="M125.571 39.926l-58.5-39c-1.997-1.23-4.128-1.24-6.142 0l-58.5 39C.929 40.926 0 42.712 0 44.497v39c0 1.786.929 3.572 2.429 4.571l58.5 39.006c1.996 1.229 4.128 1.24 6.142 0l58.5-39.006c1.5-.999 2.429-2.785 2.429-4.57v-39c0-1.786-.929-3.572-2.429-4.572zm-56.07-24.144l43.07 28.715-19.214 12.858L69.5 41.425V15.784zm-11.001 0v25.644L34.642 57.354 15.428 44.498 58.5 15.782zm-47.5 39l13.786 9.215L11 73.212v-18.43zm47.5 57.43L15.428 83.497 34.642 70.64 58.5 86.569v25.643zM64 76.997l-19.428-13 19.428-13 19.428 13-19.428 13zm5.5 35.215V86.569L93.357 70.64l19.214 12.857-43.07 28.715zm47.5-39l-13.786-9.215L117 54.783v18.429z" />
    </svg>,
    'CodePenIcon'
  );

  //sidebar social icons
  const SocialIconButton = ({ Icon }: { Icon: React.ElementType }) => {
    const isDarkMode = theme.palette.mode === 'dark';
    const backgroundColor = isDarkMode ? theme.palette.primary.main : '#FFFFFF';
    const color = isDarkMode ? 'white' : theme.palette.primary.main;
    const hoverBackgroundColor = isDarkMode ? '' : 'rgba(0, 0, 0, 0.7)';

    return (
      <IconButton
        sx={{
          color,
          backgroundColor,
          ':hover': {
            backgroundColor: hoverBackgroundColor,
            color: 'primary.main',
          },
        }}
      >
        <Icon />
      </IconButton>
    );
  };

  return (
    <>
      <Box className="centerBox" sx={{ mt: '64px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', mx: 4 }}>
            <Typography variant={'h3'} className={'name'}>
              Dev Blog
            </Typography>
            <Box sx={{ mb: '8px', pt: '8px', borderBottomWidth: '1.5px' }} />
            <Grid container spacing={4}>
              <Grid item container xs={12} md={8} spacing={3}>
                <Grid item xs={12}>
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
                <Paper elevation={8} sx={{ px: 3, py: 2, mb: 3,border: `${darkMode? '1px solid #1e4976': ''}` }}>
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
                <Paper  elevation={8} sx={{ p: 3, mb: 3, border: `${darkMode? '1px solid #1e4976': ''}` }}>
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
                      color="primary"
                      placeholder="example@email.com"
                      fullWidth
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
