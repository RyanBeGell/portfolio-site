import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Grid } from '@mui/material';
import styles from '@/src/components/Card.module.css'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export interface Props{
    title?: string, //temporarily optional
    body?: string, //temporarily optional
    image?: string, //temporarily optional
    chip1?: string,
    chip2?: string,
    chip3?: string,
  }
/*
  This component is to be used within an MUI image list, each ProjectCard is an ImageListItem. 
*/
export default function ProjectCard(props:Props) {
    return (<>
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 400 }} className={styles.card}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://animals.sandiegozoo.org/sites/default/files/2017-12/iguana-grand-cayman-blue.jpg"
        />
        <CardContent>
        <Chip label="React" size='small' color='primary' variant='outlined'  sx={{mb:'16px'}}/>
            <Typography gutterBottom variant="h5" component="div">
            Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button endIcon={<DoubleArrowIcon/>}>Read More</Button>
        </CardActions>
        </Card>
    </Grid>
    </>)
}