import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/src/components/sidebar/Sidebar'
import Landing from '@/src/components/Landing'
import { Grid, Box, CssBaseline, Divider } from '@mui/material'
import React, { useRef, useState, createContext, useEffect, useLayoutEffect, useMemo, useContext } from 'react'
import styles from '@/src/components/landing.module.css';
import { createTheme, ThemeProvider,  ThemeOptions, PaletteMode, useTheme} from '@mui/material'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import RecentBlogPosts from '@/src/components/RecentBlogPosts'
import Contact from '@/src/components/Contact'
import AboutMe from '@/src/components/AboutMe'
import { getDesignTokens } from '@/src/createPallette'
import { ColorModeContext } from './_app'

const Home: NextPage = () => {
 
  const {mode} = useContext(ColorModeContext);

  return (<>
              <Box sx={{mx:'48px'}}>
                <Element name="about">
                  <AboutMe/>
                </Element>
                <Divider/>
                <Element name="skills">
                  <Skills/>
                </Element>
                <Divider/>
                <Element name="projects">
                  <Projects/>
                </Element>
                <Divider/>
                <Element name="blog">
                  <RecentBlogPosts/>
                </Element>
                <Divider/>
                <Element name="contact">
                  <Contact/>
                </Element>
                <Divider/>
                <Box className="centerFlexBox">
                  Footer will go here
                </Box>
              </Box>
  </>)
}

export default Home