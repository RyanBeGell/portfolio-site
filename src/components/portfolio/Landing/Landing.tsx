import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Fade, Grid, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { scroller } from 'react-scroll';
import styles from './Landing.module.css';

export default function Landing() {
  const theme = useTheme();

  const handleScroll = () => {
    //used to determine offset (mobile app bar is 56px height)
    const appBarOpen = window.innerWidth < 1200;

    scroller.scrollTo('about', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: appBarOpen ? -56 : 0,
    });
  };

  return (
    <Box
      className="centerFlexBox"
      sx={{
        minHeight: '100vh',
        maxWidth: '1150px',
        mx: 'auto',
        px: { xs: '16px', sm: '32px', md: '48px' },
        pt: { xs: '56px', sm: '56px', md: '56px', lg: '0px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Fade in={true} timeout={500}>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" className="name" sx={{ ml: '-4px' }}>
              Ryan
              <Typography
                component="span"
                variant="h1"
                className="name"
                color="primary"
              >
                &nbsp;BeGell
              </Typography>
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              noWrap
              sx={{ my: '16px' }}
            >
              Software Engineer
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: '600px' }}
            >
              Curious Software Engineer with a passion for all aspects of
              software development.
            </Typography>
            <Grid container spacing={2} sx={{ mt: '16px' }}>
              <Grid item>
                <Button
                  size="large"
                  startIcon={<SendIcon />}
                  variant="contained"
                  onClick={() =>
                    scroller.scrollTo('contact', {
                      duration: 500,
                      delay: 100,
                      smooth: true,
                    })
                  }
                >
                  Contact me
                </Button>
              </Grid>
              <Grid item>
                <Link href="/portfolio" passHref>
                  <Button
                    size="large"
                    startIcon={<DescriptionIcon />}
                    variant="outlined"
                  >
                    View Portfolio
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ textAlign: { xs: 'center', md: 'right' } }}
          >
            <Image
              src="/photo.jpg"
              alt="ManAtDesk"
              width={554.4}
              height={660}
              priority
              style={{
                borderRadius: '4px',
                maxWidth: '100%',
                height: 'auto',
                width: 'auto',
                margin: '0 auto',
              }}
            />
          </Grid>
        </Fade>
      </Grid>
      <IconButton
        id={styles.ArrowIcon}
        color="primary"
        onClick={handleScroll}
        sx={{ mt: '16px' }}
      >
        <KeyboardDoubleArrowDownIcon
          color="primary"
          sx={{ fontSize: '32px' }}
        />
      </IconButton>
    </Box>
  );
}
