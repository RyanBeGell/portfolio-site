import Footer from '@/src/components/portfolio/Footer/Footer';
import Landing from '@/src/components/portfolio/Landing/Landing';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';
import { Element } from 'react-scroll';

export default function LandingLayout({ children }: any) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { mode } = useContext(ColorModeContext);

  return (
    <>
      <Element name="home">
        <Box
          className="centerFlexBox"
          sx={{
            minHeight: '100vh',
            bgcolor: 'background.light',
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
      <Box sx={{ width: '100%'}}>
          <Divider />
          <Box sx={{ mx:'48px', my:'24px' }}>
            <Footer />
          </Box>
        </Box>
    </>
  );
}
