import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '@/src/components/sidebar/Sidebar'
import Landing from '@/src/components/Landing'
import { Grid, Box, CssBaseline, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import styles from '@/src/components/landing.module.css';
import { useLayoutEffect } from 'react'
import { useEffect, createContext } from 'react'
import { createTheme, ThemeProvider,  ThemeOptions, PaletteMode, useTheme, } from '@mui/material'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeToggle from '@/src/components/DarkModeToggle'

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


  const [mode, setMode] = React.useState<PaletteMode>('light');
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
        main: '#2196F3',
        light: '#0072E5',
        dark: '#007FFF',
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
          default: '#FFFFFF',
          dark: '#FAF9F6',
          paper: '#001e3c',
          nav: '#2196F3',
      }),
    },
      
      text: {
        ...(mode === 'dark'
        ? {
            primary: '#ffffff',
            contrast: '#2196F3'
          }
        : {
            primary: '#000000',
            contrast: '#114b7a'
        }),
      },

      //change hover color opacity to 0.1 to make it more visible
      action: {
        ...(mode === 'dark'
        ? {
          hover: '#0072E56E',
          hoverOpacity: 0.1,
          }
        : {
          hover: '#1769aa',
          hoverOpacity: 0.1,
        }),
      },
    },
  });

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
 
  console.log(mode);
  return (<>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

        <Sidebar/>
        <Box className={styles.darkModeToggle} onClick={colorMode.toggleColorMode}>
          <DarkModeToggle mode={mode}/>
        </Box> 

        {/* Landing */}
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          sx={{ minHeight: '100vh' }}
        >
          <Landing/>
        </Box>
        {/*About section*/}
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          sx={{ minHeight: '100vh', backgroundColor: 'background.dark' }}
        >
        </Box>
        {/* Skills section */}
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          sx={{ minHeight: '100vh'}}
        >
        </Box>
        {/*Projects section*/}
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          sx={{ minHeight: '100vh', backgroundColor: 'background.dark' }}
        >
        </Box>
        {/* Blog section */}
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          sx={{ minHeight: '100vh'}}
        >
        </Box>
        {/*Contact section*/}
        <Box 
          display="flex" 
          alignItems="center"
          justifyContent="center"
          className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          sx={{ minHeight: '100vh', backgroundColor: 'background.dark' }}
        ></Box>

      </ThemeProvider>
    </ColorModeContext.Provider>
  </>)
}

export default Home