import SouthIcon from '@mui/icons-material/South';
import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import ReactTyped from 'react-typed';
import styles from './Landing.module.css';

const handleScroll = () => {
  //used to determine offset (mobile app bar is 56px height)
  const appBarOpen = window.innerWidth < 1200;

  scroller.scrollTo('skills', {
    duration: 500,
    delay: 100,
    smooth: true,
    offset: appBarOpen ? -56 : 0,
  });
};

export default function Landing() {
  return (
    <Box className="centerFlexBox" sx={{ minHeight: '100vh', mx: '48px' }}>
      <Grid className="centerFlexBox">
        <Grid item>
          <Typography variant={'h1'} className={'name'} >
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
          <Typography variant={'h4'} noWrap>
            <ReactTyped
              loop={false}
              typeSpeed={50}
              strings={['Full Stack Software Developer']}
              smartBackspace={false}
              shuffle={false}
              loopCount={0}
              showCursor={false}
              cursorChar="_"
            />
          </Typography>
        </Grid>
        <Grid item sx={{ pl: '32px',  display: { xs: 'none', sm: 'none', md:'block' },}}>
          <Image
            src="/programming.svg"
            alt="ManAtDesk"
            width={700}
            height={600}
          />
        </Grid>
      </Grid>
      <IconButton id={styles.ArrowIcon} color="primary" onClick={handleScroll}>
        <SouthIcon color="primary" sx={{ fontSize: '32px' }} />
      </IconButton>
    </Box>
  );
}
