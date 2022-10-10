import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/src/components/sidebar/Sidebar'
import Landing from '@/src/components/Landing'
import { Grid, Box, CssBaseline, Divider } from '@mui/material'
import React, { useRef, useState, createContext, useEffect, useLayoutEffect, useMemo } from 'react'
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

export const ColorModeContext = createContext<any>(null);

const Home: NextPage = () => {

  const [sideNavOpen, setSideNavOpen] = useState(false);

  const [mode, setMode] = React.useState<PaletteMode>('dark');
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
 
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  //useLayoutEffect to get the current width and determine if the side nav is open or not
  useLayoutEffect(() => {
    //Responsive side nav drawer closes when the width is less than 600px
    if(window.innerWidth < 600) {
      setSideNavOpen(false);
    } else {
      setSideNavOpen(true);
    }
  } , [])

  /*
  useLayoutEffect hook to listen on component mount and watch for resize events.

  The useLayoutEffect hook over useEffect here because updates scheduled inside
  useLayoutEffect will be flushed synchronously before the browser has a chance to paint.
  This helps avoids flickering as things are repositioned on the screen.
  */
  useLayoutEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 600) {
        setSideNavOpen(false);
      } else {
        setSideNavOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  } , [])
 
  return (
  <Box 
  className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
  >
    <ColorModeContext.Provider value={{mode}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {/* passing function to change color mode to sideNav to use on DarkMode switch*/}
        <Sidebar toggleColorMode={colorMode.toggleColorMode}/>
        {/* Landing */}
        <Element name="landing">
          <Box 
            display="flex" 
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', bgcolor:'background.dark'}}
          >
            <Landing/>
          </Box> 
        </Element>
        {mode==='dark'?<Divider/>:null}
          <Box 
            className="centerFlexBox"
            sx={{width:'100%'}}
            >
          {/*About section*/}
          <Box sx={{mx:'48px'}}>
            <AboutMe/>
            <Divider/>
          {/* Skills section */}
            <Skills/>
            <Divider/>
          {/*Projects section*/}
            <Projects/>
            <Divider/>
          {/* Blog section */}
          <RecentBlogPosts/>
          <Divider/>
          {/*Contact section*/}
            <Contact/>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </Box>)
}

export default Home