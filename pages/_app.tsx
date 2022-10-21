import '@/src/components/global.css'
import '@/src/PrismaTheme.css'
import { AppProps } from 'next/app';
import Sidebar from '@/src/components/sidebar/Sidebar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
import Skills from '@/src/components/Skills'
import Projects from '@/src/components/Projects'
import RecentBlogPosts from '@/src/components/RecentBlogPosts'
import Contact from '@/src/components/Contact'
import AboutMe from '@/src/components/AboutMe'
import { getDesignTokens } from '@/src/createPallette'
import router, { useRouter } from 'next/router';
import { Element} from 'react-scroll'
import MainLayout from '@/src/components/layouts/MainLayout';
import BlogLayout from '@/src/components/layouts/BlogLayout';

export const ColorModeContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {

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
  
  //On mount get the current width and determine if the side nav is open or not
  useLayoutEffect(() => {
    //Responsive side nav drawer closes when the width is less than 600px
      setSideNavOpen(window.innerWidth > 600);
  } , [])

  /*
    Listen on component mount and watch for resize events.
  */
  useLayoutEffect(() => {
    const handleResize = () => {
      setSideNavOpen(window.innerWidth > 600);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  } , [])  
  
  const router = useRouter();

  return(<>
    <ColorModeContext.Provider value={{mode}}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box 
            className={sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          >
            {/* passing function to change color mode to sideNav to use on DarkMode switch*/}
            <Sidebar toggleColorMode={colorMode.toggleColorMode}/>
              {router.pathname.includes("blog/posts")?
                <BlogLayout>
                  < Component {...pageProps} />
                </BlogLayout>: 
                <MainLayout>
                  < Component {...pageProps} />
                </MainLayout>}
          </Box>
        </ThemeProvider>
    </ColorModeContext.Provider>
  </>)
}

export default MyApp
