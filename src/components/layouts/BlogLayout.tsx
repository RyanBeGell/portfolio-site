import { Box, Paper } from '@mui/material'
import React, { useState, useContext } from 'react'
import { ColorModeContext } from 'pages/_app'
import { Element } from 'react-scroll'
import Landing from '@/src/components/Landing'

export default function BlogLayout({children}:any){

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const {mode} = useContext(ColorModeContext);

    return(<>
    <Box 
      className={`${mode==='light'?'blogLightContainer':'centerFlexBox'}`}
      flexDirection="column"
      sx={{width:'100%',}}
    >
      <Box className={'blogPost'}>
        <Paper className={`${mode==='light'?'blogPostLight':'blogPostDark'}`} elevation={8}>
          <main>{children}</main>
        </Paper>
      </Box>
    </Box>
  </>)
}