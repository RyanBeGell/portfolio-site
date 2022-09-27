import { Grid, Typography, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import styles from './landing.module.css';
import programming from './programming_desk.svg';
import Image from "next/image";
import ReactTyped from 'react-typed';
import Avatar from '@mui/material/Avatar';
// import mui south icon
import SouthIcon from '@mui/icons-material/South';
import IconButton from '@mui/material/IconButton';

export default function Landing(){


    return (
        <>
    <Grid container direction="row" alignItems="center" justifyContent="center" display="flex" wrap='nowrap'>
        <Grid item sx={{pr:8}}>
            <Typography variant={"h1"} className={styles.name}noWrap>
                Ryan <Typography component="span" variant={"h1"} className={styles.name} color="primary"> BeGell</Typography>
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
                 height={787}/>
        </Grid>
    </Grid>
    <IconButton className={styles.ArrowIcon} sx={{ "&:hover": { backgroundColor: 'action.arrow' } }}>
        <SouthIcon color="primary" sx={{fontSize: '32px'}} />
    </IconButton>
    </>)
}