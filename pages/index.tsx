import AboutMe from '@/src/components/portfolio/about/AboutMe';
import Contact from '@/src/components/portfolio/Contact/Contact';
import ProjectsSection from '@/src/components/portfolio/Projects/Projects';
import RecentBlogPostsSection from '@/src/components/portfolio/RecentBlogPosts/RecentBlogPosts';
import Skills from '@/src/components/portfolio/Skills/Skills';
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
        <Divider />
        <Box className="centerFlexBox">Footer will go here</Box>
      </Box>
    </>
  );
};

export default Home;
