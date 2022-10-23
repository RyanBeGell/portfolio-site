import { Box } from '@mui/material'
import React, { useState, useContext } from 'react'
import { ColorModeContext } from 'pages/_app'
import { Element } from 'react-scroll'
import Landing from '@/src/components/Landing'
import Divider from '@mui/material/Divider';

export default function LandingLayout({children}:any){

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const {mode} = useContext(ColorModeContext);

  return(<>
    <Element name="home">
      <Box
        className="centerFlexBox"
        sx={{ minHeight: '100vh', bgcolor: 'background.dark', width: '100%', }}
      >
        <Landing/>
      </Box>
    </Element>
    {mode==='dark'? <Divider/>:null}
    <Box
      className="centerFlexBox"
      flexDirection="column"
    >
      <Box className={'centerLeft'}>
        <main>{children}</main>
      </Box>
    </Box>
  </>)
}