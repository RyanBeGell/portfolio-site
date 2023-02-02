import AboutMe from '@/src/components/about/AboutMe';
import Contact from '@/src/components/contact/Contact';
import Projects from '@/src/components/projects';
import RecentBlogPosts from '@/src/components/recent-blog-posts/RecentBlogPosts';
import Skills from '@/src/components/skills/Skills';
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
