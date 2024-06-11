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
          {`Hello! I'm a software engineer passionate about all aspects of software development. My main strengths lie in creating dynamic and responsive front-end components with React and building robust back-end REST APIs using Java and Spring Boot. While I frequently use React and Java, I often experiment with other languages and frameworks, and I'm always eager to learn something new.`}
          <br/>
          <br />
          {`Want to learn more about me and my experience? Check out my `}
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
          {`and personal `}
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
