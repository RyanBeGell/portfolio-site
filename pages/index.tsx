import Certifications from '@/src/components/portfolio/Certifications/Certifications';
import Contact from '@/src/components/portfolio/Contact/Contact';
import ProjectsSection from '@/src/components/portfolio/Projects/Projects';
import RecentBlogPostsSection from '@/src/components/portfolio/RecentBlogPosts/RecentBlogPosts';
import Skills from '@/src/components/portfolio/Skills/Skills';
import AboutMe from '@/src/components/portfolio/About/AboutMe';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { Box, Divider, Fade } from '@mui/material';
import Fab from '@mui/material/Fab';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';

const Home: NextPage = () => {
  const { pathname } = useRouter();
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (!showScroll && scrollPosition > 200) {
      setShowScroll(true);
    } else if (showScroll && scrollPosition <= 200) {
      setShowScroll(false);
    }
  };

  const toggleScrollButton = () => {
    window.requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleScrollButton);
    return () => {
      window.removeEventListener('scroll', toggleScrollButton);
    };
  }, [toggleScrollButton]);

  //Set scroll history behavior to cause page to scroll to top on refresh
  useEffect(() => {
    if (pathname === '/') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
    //Cleanup  function to reset scroll history behavior back to default
    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, [pathname]);

  const handleScrollArrowClick = () => {
    setShowScroll(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Box sx={{ mx: '48px' }}>
        <Element name="about">
          <AboutMe />
        </Element>
        <Divider />
        <Element name="skills">
          <Skills />
        </Element>
        <Divider />
        <Element name="certifications">
          <Certifications />
        </Element>
        <Divider />
        <Element name="projects">
          <ProjectsSection />
        </Element>
        <Divider />
        <Element name="blog">
          <RecentBlogPostsSection />
        </Element>
        <Divider />
        <Element name="contact">
          <Contact />
        </Element>
        <Fade timeout={500} in={showScroll} unmountOnExit>
          <Fab
            color="primary"
            size="small"
            aria-label="add"
            onClick={() => {
              setShowScroll(false);
              window.scrollTo({ top: 0 });
            }}
            sx={{
              position: 'fixed',
              bottom: '16px',
              right: '16px',
            }}
          >
            <KeyboardArrowUpRoundedIcon />
          </Fab>
        </Fade>
      </Box>
    </>
  );
};

export default Home;
