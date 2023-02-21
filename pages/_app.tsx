import BlogAppBar from '@/src/components/blog/AppBar/BlogAppBar';
import styles from '@/src/components/portfolio/Landing/Landing.module.css';
import Sidebar from '@/src/components/portfolio/Sidebar/Sidebar';
import '@/src/global.css';
import BlogLayout from '@/src/layouts/blog/BlogLayout';
import DefaultLayout from '@/src/layouts/portfolio/DefaultLayout';
import LandingLayout from '@/src/layouts/portfolio/LandingLayout';
import { getDesignTokens } from '@/src/theme/createPallette';
import '@/src/theme/PrismaTheme.css';
import {
  Box,
  createTheme,
  CssBaseline,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { createContext, useMemo } from 'react';

export const ColorModeContext = createContext<any>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const router = useRouter();

  return (
    <>
      <ColorModeContext.Provider value={{ mode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* Custom code snippet highlighting for light/dark mode */}
          {mode === 'light' ? (
            <GlobalStyles
              styles={{
                pre: { backgroundColor: '#001e3c !important' },
                code: { backgroundColor: '#001e3c !important' },
              }}
            />
          ) : (
            <GlobalStyles
              styles={{
                pre: { backgroundColor: '#0A1929 !important' },
                code: { backgroundColor: '#0A1929 !important' },
              }}
            />
          )}
          <Box
            className={
              !router.pathname.includes('blog') ? styles.shiftContentLeft : ''
            }
          >
            {/* passing function to change color mode to sideNav to use on DarkMode switch*/}
            {router.pathname === '/' ? (
              <Sidebar toggleColorMode={colorMode.toggleColorMode} />
            ) : (
              <BlogAppBar toggleColorMode={colorMode.toggleColorMode} />
            )}
            {router.pathname.includes('blog/posts') ? (
              <BlogLayout>
                <Component {...pageProps} />
              </BlogLayout>
            ) : router.pathname === '/' ? (
              <LandingLayout>
                <Component {...pageProps} />
              </LandingLayout>
            ) : (
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            )}
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default MyApp;
