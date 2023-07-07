import { Box } from '@mui/material';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';

export default function DefaultLayout({ children }: any) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { mode } = useContext(ColorModeContext);

  return (
    <>
      {/* main content 100vh-121px to account for footer */}
      <Box
        className="centerAlign"
        flexDirection="column"
        sx={{ position: 'relative', minHeight: 'calc(100vh - 122px)' }}
      >
        <Box className={'centerLeft'}>
          <main>{children}</main>
        </Box>
      </Box>
    </>
  );
}
