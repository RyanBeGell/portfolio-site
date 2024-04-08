import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Button, Fade, Grid, Typography, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from 'next/link';
import { scroller } from 'react-scroll';
import styles from './Landing.module.css';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';

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
      sx={{ minHeight: '100vh', maxWidth: '1150px', mx: '48px', pt: { xs: '56px', sm: '56px', md: '56px', lg: '0px' }}}
    >
      <Grid container className="centerFlexBox" spacing={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
        <Fade in={true} timeout={500}>
          <Grid item md={7.5}>
            <Typography variant={'h1'} className={'name'} sx={{ ml: '-4px' }}>
              Ryan
              <Typography
                component="span"
                variant={'h1'}
                className={'name'}
                color="primary"
              >
                &nbsp;BeGell
              </Typography>
            </Typography>
            <Typography
              variant={'h4'}
              color="text.secondary"
              noWrap
              sx={{ my: '16px' }}
            >
              Software Engineer
            </Typography>
            <Typography
              variant={'body1'}
              color="text.secondary"
              sx={{ maxWidth: '600px' }}
            >
              Curious Software Engineer with a passion for problem solving and working with new technologies.
            </Typography>
            <Grid container spacing={2} sx={{ mt: '16px' }}>
              <Grid item>
                  <Button
                    size="large"
                    startIcon={<SendIcon />}
                    variant={'contained'}
                    onClick={() => scroller.scrollTo('contact', { duration: 500, delay: 100, smooth: true, })}
                  >
                    Contact me
                  </Button>
              </Grid>
              <Grid item>
                <Link href="/portfolio">
                  <Button
                    size="large"
                    startIcon={<DescriptionIcon />}
                    variant={'outlined'}
                  >
                    View Portfolio
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
        <Fade in={true} timeout={1500}>
          <Grid item md={4.5} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Image
              src="/photo.jpg"
              alt="ManAtDesk"
              width={554.4}
              height={660}
              priority
              style={{ borderRadius: '4px' }}
            />
          </Grid>
        </Fade>
      </Grid>
      <IconButton id={styles.ArrowIcon} color="primary" onClick={handleScroll}>
        <KeyboardDoubleArrowDownIcon
          color="primary"
          sx={{ fontSize: '32px' }}
        />
      </IconButton>
    </Box>
    //TODO: Rotating skills section conveyor belt like auth0 landing page
  );
}
