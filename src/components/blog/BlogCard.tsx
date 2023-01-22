import styles from '@/src/components/Card.module.css';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Button, CardActions, Chip, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import router from 'next/router';

export interface Props{
    title?: string, //temporarily optional
    body?: string, //temporarily optional
    path?: string,
    image?: string, //temporarily optional
    chip1?: string,
    chip2?: string,
    chip3?: string,
  }
/*
  This component is to be used within an MUI image list, each ProjectCard is an ImageListItem. 
*/
export default function ProjectCard(props:Props) {

  const handleRedirect = () => {
    router.push('/blog/posts/' + props.path);
  }

  return (<>
    <Grid item  xs={12} sm={12} md={6} lg={4}>
      <Card raised className={styles.card}> 
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
        <Chip label="React" size='small' color='primary' variant='outlined'  sx={{mb:'16px'}}/>
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {props.body}
            </Typography>
        </CardContent>
        <CardActions>
            <Button endIcon={<DoubleArrowIcon/>} onClick={handleRedirect}>Read More</Button>
        </CardActions>
        </Card>
    </Grid>
  </>)
}