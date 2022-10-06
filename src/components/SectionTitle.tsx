import { Box, Grid, Typography } from "@mui/material";
import styles from './Section.module.css'

export interface Props{
    title: string,
    title2?: string,
  }

export default function SectionTitle(props: Props){
    
    return(<>
        <Box className={styles.section}>
            <Box sx={{px:'16px',pb:'48px'}}> 
                <Typography variant="h4">&nbsp;{props.title}</Typography>
                <Typography variant="body1" sx={{ml:"-16px", mt:'16px',mb:'-16px', color:'text.secondary'}}>{props.title2}</Typography>
            </Box>
        </Box>
    </>)
}