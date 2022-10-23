import '@/src/components/global.css'
import '@/src/PrismaTheme.css'
import { AppProps } from 'next/app';
import Sidebar from '@/src/components/sidebar/Sidebar'
import {  Box, CssBaseline, } from '@mui/material'
import React, { useState, createContext, useLayoutEffect, useMemo } from 'react'
import styles from '@/src/components/landing.module.css';
import { createTheme, ThemeProvider,PaletteMode} from '@mui/material'
import { getDesignTokens } from '@/src/createPallette'
import { useRouter } from 'next/router';
import DefaultLayout from '@/src/components/layouts/DefaultLayout';
import BlogLayout from '@/src/components/layouts/BlogLayout';
import LandingLayout from '@/src/components/layouts/LandingLayout';

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
                </BlogLayout>:router.pathname.match("/")?
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
