import { scrollToAbout } from '@/src/components/portfolio/Sidebar/react-scroll/scrollers';
import SouthIcon from '@mui/icons-material/South';
import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import styles from './Landing.module.css';

export default function Landing() {
  return (
      <Box className="centerFlexBox" sx={{ minHeight: '100vh', mx:'48px' }}>
        <Grid  className="centerFlexBox">
          <Grid item>
            <Typography variant={'h1'} className={'name'}>
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
                typeSpeed={80}
                strings={['Full Stack Software Developer']}
                smartBackspace={false}
                shuffle={false}
                loopCount={0}
                showCursor={true}
                cursorChar="_"
              />
            </Typography>
          </Grid>
          <Grid item sx={{ pl: '32px' }} >
            <Image
              src="/programming.svg"
              alt="ManAtDesk"
              width={700}
              height={600}
            />
          </Grid>
        </Grid>
        <IconButton
          id={styles.ArrowIcon}
          color="primary"
          onClick={scrollToAbout}
        >
          <SouthIcon color="primary" sx={{ fontSize: '32px' }} />
        </IconButton>
      </Box>
  );
}
