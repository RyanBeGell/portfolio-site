import { Box, useTheme } from '@mui/material';
import Link from 'next/link';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function AboutMe() {
  const theme = useTheme();
  return (
    <Box className="centerBox">
      <SectionTitle title="About Me" />
      <ScrollAnimation animation={'fade'} timeout={1000}>
        {/* Div Necessary to provide react element to Scroll Animation */}
        <div>
          {`I'm a self-motivated Software Engineer, with a natural curiosity for learning new technologies. I enjoy working with ReactJS, Java, and AWS,  but I'm always ready to get started learning new languages, frameworks, and technologies. Want to find out more about me and my experience? Check out my `}
          <Box
            display={'inline'}
            sx={{
              '& a': {
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              },
            }}
          >
            <Link href="/portfolio">project portfolio</Link>{' '}
          </Box>
          {`and `}
          <Box
            display={'inline'}
            sx={{
              '& a': {
                color: 'primary.main',
                textDecoration: 'none', // Remove the underline by default
                '&:hover': {
                  textDecoration: 'underline', // Only show underline on hover
                },
              },
            }}
          >
            <Link href="/blog">dev blog</Link>
          </Box>
          {'.'}
        </div>
      </ScrollAnimation>
    </Box>
  );
}
