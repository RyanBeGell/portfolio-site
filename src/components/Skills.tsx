import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';

import ReactLogo from 'public/Icons/ReactLogo';
import JavaScriptLogo from 'public/Icons/JavaScriptLogo';
import TypeScriptLogo from 'public/Icons/TypeScriptLogo';
import CSS3Logo from 'public/Icons/CSS3Logo';
import HTML5Logo from 'public/Icons/HTML5Logo';
import MUILogo from 'public/Icons/MUILogo';
import NextLogo from 'public/Icons/NextLogo';
import OracleLogo from 'public/Icons/OracleLogo';

export default function Skills(){

    const theme = useTheme();
    const primary = theme.palette.primary.main;

    return(<>
    <Box sx={{p:5}} justifyContent="center">
    {/* Front End Section/Icons */}
    <Typography variant={'h4'} sx={{py:'16px'}}>
        Front End
    </Typography>
    <Grid container spacing={4}>
    {['ReactJS', 'JavaScript', 'TypeScript', 'CSS3', 'HTML5','Material UI', 'NextJS', 'Oracle DB'].map((name, index) => (
            <Grid item textAlign="center" columnSpacing={4} >
                {
                    index === 0? <ReactLogo height={64} width ={64} fill={primary}/>:
                    index === 1? <JavaScriptLogo height={64} width ={64} fill={primary}/>:
                    index === 2? <TypeScriptLogo height={64} width ={64} fill={primary}/>:
                    index === 3? <CSS3Logo height={64} width ={64} fill={primary}/>:
                    index === 4? <HTML5Logo height={64} width ={64} fill={primary}/>:
                    index === 5? <MUILogo height={64} width ={64} fill={primary}/>:
                    index === 6? <NextLogo height={64} width ={64} fill={primary}/>:
                    index === 7? <OracleLogo height={64} width ={64} fill={primary}/>:null
                }
                <Divider sx={{bgcolor: (theme) => theme.palette.primary.main, height: 2, my:1}}/>
                <Typography variant={'body1'} sx={{color:'primary.main'}}>
                    {name}
                </Typography>
            </Grid>
            ))}
    </Grid>
    </Box>
    </>)
}