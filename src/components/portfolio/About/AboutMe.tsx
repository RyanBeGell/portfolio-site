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
          {`I'm a self-motivated Full-Stack Software Engineer, with a natural curiosity for learning new technologies and a proven track record in rapid learning and independent problem-solving. Actively seeking a challenging role to collaborate, make meaningful contributions, and further expand my skills and experience. I enjoy working with ReactJS, Java, and AWS to build full stack applications, but I'm ready eager to get started learning a new language, framework, or technology. Want to find out more about my experience? Check out my `}
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
            <Link href="/resume">online resume</Link>{' '}
          </Box>
          {`and `}
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
            <Link href="/portfolio">project portfolio</Link>
            {'.'}
          </Box>
        </div>
      </ScrollAnimation>
    </Box>
  );
}
