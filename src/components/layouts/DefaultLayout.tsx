import { Box } from '@mui/material'
import React, { useState, useContext } from 'react'
import { ColorModeContext } from 'pages/_app'
export default function DefaultLayout({children}:any){

    const [sideNavOpen, setSideNavOpen] = useState(false);
    const {mode} = useContext(ColorModeContext);
    

  return(<>
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