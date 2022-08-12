import { Grid, Typography } from "@mui/material";
import styles from './landing.module.css';
import programming from './programming_desk.svg';
import Image from "next/image";
import ReactTyped from 'react-typed';

export default function Landing(){


    return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item>
            <Typography variant={"h1"} className={styles.firstName} >
                Ryan <span className={styles.lastName}>BeGell</span>
            </Typography>
            <Typography variant={"h4"}>
                <ReactTyped
                    loop={false}
                    typeSpeed={80}
                    strings={["Full Stack Software Developer"]}
                    smartBackspace={false}
                    shuffle={false}
                    backDelay={1}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
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
    )
}