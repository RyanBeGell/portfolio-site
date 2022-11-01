import AboutMe from '@/src/components/AboutMe';
import Contact from '@/src/components/Contact';
import Projects from '@/src/components/ProjectsGrid';
import RecentBlogPosts from '@/src/components/RecentBlogPosts';
import Skills from '@/src/components/Skills';
import { Box, Divider } from '@mui/material';
import type { NextPage } from 'next';
import { useContext } from 'react';
import { Element } from 'react-scroll';
import { ColorModeContext } from './_app';

const Home: NextPage = () => {
  const { mode } = useContext(ColorModeContext);

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
        <Element name="projects">
          <Projects />
        </Element>
        <Divider />
        <Element name="blog">
          <RecentBlogPosts />
        </Element>
        <Divider />
        <Element name="contact">
          <Contact />
        </Element>
        <Divider />
        <Box className="centerFlexBox">Footer will go here</Box>
      </Box>
    </>
  );
};

export default Home;
