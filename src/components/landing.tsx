import { Grid, Typography } from "@mui/material";
import styles from './landing.module.css';
import programming from './programming_desk.svg';
import Image from "next/image";

export default function Landing(){


    return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item>
            <Typography variant={"h1"} className={styles.firstName}>
                Ryan <br /><span className={styles.lastName}>BeGell</span>
            </Typography>
        </Grid>
        <Grid item>
            <Image 
                src="/programming_desk.svg"
                 alt="ManAtDesk"
                 width={900.94}
                 height={787}/>
        </Grid>
    </Grid>
    )
}