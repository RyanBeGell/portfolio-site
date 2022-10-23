import { Grid, Typography, Box } from "@mui/material";
import styles from './landing.module.css';
import programming from './programming_desk.svg';
import Image from "next/image";
import ReactTyped from 'react-typed';
import Avatar from '@mui/material/Avatar';
import SouthIcon from '@mui/icons-material/South';
import IconButton from '@mui/material/IconButton';
import { scrollToAbout } from '@/src/scrollers';

export default function Landing(){

    return (<>
        <Box 
            className='centerFlexBox'
            sx={{ minHeight: '100vh'}}
          >
            <Grid container direction="row" className='centerFlexBox'>
                <Grid item sx={{pr:8}}>
                    <Typography variant={"h1"} className={styles.name}>
                        Ryan 
                        <Typography 
                        component="span"
                        variant={"h1"}
                        className={styles.name}
                        color="primary">
                            &nbsp;BeGell
                        </Typography>
                    </Typography>
                    <Typography variant={"h4"} noWrap>
                        <ReactTyped
                            loop={false}
                            typeSpeed={80}
                            strings={["Full Stack Software Developer"]}
                            smartBackspace={false}
                            shuffle={false}
                            loopCount={0}
                            showCursor={true}
                            cursorChar="_"
                        />
                    </Typography>
                </Grid>
                <Grid item>
                    <Image 
                        src="/programming.svg"
                        alt="ManAtDesk"
                        width={900.94}
                        height={787}
                    />
                </Grid>
            </Grid>
            <IconButton className={styles.ArrowIcon} color='primary' onClick={scrollToAbout}>
                <SouthIcon color="primary" sx={{fontSize: '32px'}} />
            </IconButton>
        </Box>
    </>)
}