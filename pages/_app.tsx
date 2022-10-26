import '@/src/components/global.css'
import '@/src/PrismaTheme.css'
import { AppProps } from 'next/app';
import Sidebar from '@/src/components/sidebar/Sidebar'
import {  Box, CssBaseline, GlobalStyles, } from '@mui/material'
import React, { useState, createContext, useLayoutEffect, useMemo } from 'react'
import styles from '@/src/components/landing.module.css';
import { createTheme, ThemeProvider,PaletteMode} from '@mui/material'
import { getDesignTokens } from '@/src/createPallette'
import { useRouter } from 'next/router';
import DefaultLayout from '@/src/components/layouts/DefaultLayout';
import BlogLayout from '@/src/components/layouts/BlogLayout';
import LandingLayout from '@/src/components/layouts/LandingLayout';
import BlogNavBar from '@/src/components/BlogNavBar';
import BlogAppBar from '@/src/components/BlogAppBar';
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

          {/* Custom code snippet highlighting for light/dark mode */}
          {mode==='light'?
            <GlobalStyles
              styles={{
                pre:{ backgroundColor: '#001e3c !important' },
                code: { backgroundColor: '#001e3c !important' },
              }}
            />:
            <GlobalStyles
              styles={{
                pre:{ backgroundColor: '#0A1929 !important' },
                code: { backgroundColor: '#0A1929 !important' },
              }}
            />
          }
          <Box 
            className={!router.pathname.includes("blog") && sideNavOpen? styles.shiftContentLeft: styles.shiftContentRight}
          >
            {/* passing function to change color mode to sideNav to use on DarkMode switch*/}
            {router.pathname === "/"?
            <Sidebar toggleColorMode={colorMode.toggleColorMode}/>: <BlogAppBar toggleColorMode={colorMode.toggleColorMode}/>}
              {router.pathname.includes("blog/posts")?
                <BlogLayout>
                  < Component {...pageProps} />
                </BlogLayout>:router.pathname === "/"?
                <LandingLayout>
                  < Component {...pageProps} />
                </LandingLayout>:
                <DefaultLayout>
                  < Component {...pageProps} />
                </DefaultLayout>}
          </Box>
        </ThemeProvider>
    </ColorModeContext.Provider>
  </>)
}

export default MyApp
