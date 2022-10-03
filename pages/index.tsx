import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/src/components/sidebar/Sidebar'
import Landing from '@/src/components/Landing'
import { Grid, Box, CssBaseline } from '@mui/material'
import React, { useRef, useState } from 'react'
import styles from '@/src/components/landing.module.css';
import { useLayoutEffect } from 'react'
import { useEffect, createContext } from 'react'
import { createTheme, ThemeProvider,  ThemeOptions, PaletteMode, useTheme, } from '@mui/material'
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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Home: NextPage = () => {

  const [sideNavOpen, setSideNavOpen] = useState(false);

  //useEffect to get the current width and determine if the side nav is open or not
  useLayoutEffect(() => {
    //MUI responsive drawer closes when the width is less than 600px
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


  const [mode, setMode] = React.useState<PaletteMode>('dark');

  const colorMode = React.useMemo(
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


  //Custom Pallette for Light/Dark mode theme
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === 'dark'
        ? {
            main: '#2196F3',
            light: '#0072E5',
            dark: '#007FFF',
          }
        : {
            main: '#0d6efd',
            light: '#0072E5',
            dark: '#007FFF',
        }),
      },
      secondary: {
        main: '#f50057',
      },
      info: {
        main: '#42a5f5',
        light: '#64b5f6',
        dark: '#1976d2',
      },
      
      divider: 'rgba(255,255,255,0.12)',

      success: {
        main: '#66bb6a',
        light: '#81c784',
        dark: '#388e3c',
      },
      warning: {
        main: '#ffa726',
        light: '#ffb74d',
        dark: '#f57c00',
      },

      background: {
      ...(mode === 'dark'
      ? {
          default: '#0A1929',
          dark: '#091725',
          paper: '#001e3c',
          nav: '#001e3c',
        }
      : {
          default: '#F2F2F2',
          dark: '#F5F5F5',
          paper: '#FFFFFF',
          nav: '#0d6efd',
      }),
    },  
      text: {
        ...(mode === 'dark'
        ? {
            primary: '#ffffff',
            contrast: '#2196F3',
            subtitle: '#bfbfbf',
          }
        : {
            primary: '#000000',
            contrast: '#114b7a',
            subtitle: '#d9d9d9',
        }),
      },

      action: {
        ...(mode === 'dark'
        ? {
          hover: '#0072E540',
          arrow: '#0072E52B'
          }
        : {
          hover: '#0254cdAD',
          arrow: '#0d6efd12'
        }),
      },
    },
    //  Override MUI from changing paper opacity automatically in dark mode based on elevation
    components: {
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'unset' } },
      },
    },   
  });

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
 
  console.log(mode);
  return (
  <Box 
  alignItems="center"
  justifyContent="center"
  className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
  >
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Sidebar mode={mode} toggleColorMode={colorMode.toggleColorMode}/>
        {/* <Box className={styles.darkModeToggle} onClick={colorMode.toggleColorMode}>
          <DarkModeToggle mode={mode}/>
        </Box>  */}

        {/* Landing */}
        <Element name="landing">
          <Box 
            display="flex" 
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh'}}
          >
            <Landing/>
          </Box>
        </Element>
        {/*About section*/}
        <Box sx={{ backgroundColor: 'background.dark' }}>
          Ree
        </Box>
        {/* Skills section */}
        <Skills/>
        {/*Projects section*/}
        <Box sx={{ backgroundColor: 'background.dark'}}>
          <Projects/>
        </Box>
        {/* Blog section */}
        <RecentBlogPosts themeMode={mode}/>
        {/*Contact section*/}
        <Box 
          sx={{ backgroundColor: 'background.dark' }}
        >
          <Contact/>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </Box>)
}

export default Home