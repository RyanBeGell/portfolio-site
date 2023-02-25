import { Box, Paper } from '@mui/material';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';

export default function BlogLayout({ children }: any) {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { mode } = useContext(ColorModeContext);

  return (
    <>
      <Box
        className={`${mode === 'light' ? 'blogLightContainer' : 'centerFlexBox'}`}
        flexDirection="column"
        sx={{ width: '100%',}}
      >
        <Box className={'blogPost'} sx={{mx:'48px'}}>
          <Paper
            className={`${mode === 'light' ? 'blogPostLight' : 'blogPostDark'}`}
            elevation={8}
          >
            <main>{children}</main>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
