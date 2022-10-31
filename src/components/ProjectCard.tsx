import styles from '@/src/components/Card.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export interface Props{
    title?: string, //temporarily optional
    body?: string, //temporarily optional
    image?: string, //temporarily optional
    handleOpen : () => void; //method to close modal which provides more information about the card
  }

/*
  This component is to be used within an MUI image list, each ProjectCard is an ImageListItem. 
*/
export default function ProjectCard(props:Props) {
  return (
    <Grid item  xs={12} sm={12} md={6} lg={4}>
    <Card raised className={styles.card} sx={{minWidth:270}}> 
      <CardActionArea  onClick={props.handleOpen} sx={{color: 'primary.main', }}>
        <CardMedia
          component="img"
          height="140"
          image="https://animals.sandiegozoo.org/sites/default/files/2017-12/iguana-grand-cayman-blue.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="text.primary">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" startIcon={<LanguageIcon/>}>
          LIVE DEMO
        </Button>
        <Button size="small" startIcon={<GitHubIcon/>}>
          VIEW ON GITHUB
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}