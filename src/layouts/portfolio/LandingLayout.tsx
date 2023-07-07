import Landing from '@/src/components/portfolio/Landing/Landing';
import { Box, useTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';
import { Element } from 'react-scroll';

export default function LandingLayout({ children }: any) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { mode } = useContext(ColorModeContext);

  const theme = useTheme();

  return (
    <>
      <Element name="home">
        <Box
          className="centerFlexBox"
          sx={{
            minHeight: '100vh',
            background:
              theme.palette.mode === 'dark'
                ? 'radial-gradient(ellipse at center, #001e3c 10%, #0A1929 75%)'
                : '#FFFFFF',
            width: '100%',
          }}
        >
          <Landing />
        </Box>
      </Element>
      {mode === 'dark' ? <Divider /> : null}
      <Box className="centerFlexBox" flexDirection="column">
        <Box className={'centerLeft'}>
          <main>{children}</main>
        </Box>
      </Box>
    </>
  );
}
