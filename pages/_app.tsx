import BlogAppBar from '@/src/components/blog/AppBar/BlogAppBar';
import Footer from '@/src/components/portfolio/Footer/Footer';
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
  Divider,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { createContext, useMemo } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export const ColorModeContext = createContext<any>(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const router = useRouter();

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

  return (
    <>
      <Head>
        <title>Ryan BeGell</title>
      </Head>
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
          <Box className={router.pathname === '/' ? 'shiftContentRight' : ''}>
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
            {/* Global Footer */}
            <Box sx={{ width: '100%', backgroundColor: 'background.light' }}>
              {mode === 'dark' ? <Divider /> : null}
              <Box sx={{ mx: '48px' }}>
                <Box
                  sx={{
                    py: '48px',
                    maxWidth: '1150px',
                    margin: '0 auto',
                  }}
                >
                  <Footer />
                </Box>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default MyApp;
