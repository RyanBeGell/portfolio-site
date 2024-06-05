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
          {`Hello! I'm a dedicated and passionate software engineer interested in all aspects of software development. My main strengths lie in front-end development with React and building robust back-end REST APIs using Java/Spring Boot. I excel at building out dynamic and responsive front-end components and ensuring the reliability and scalability of web applications. While I frequently use React and Java/Springboot, I often experiment with and am eager to learn new technologies, languages, and frameworks.`}
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
