import styles from './ProjectCard.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

  return (
    <Grid item  xs={12} sm={6} md={6} lg={4}>
    <Card raised id={styles.card}> 
      <CardActionArea  onClick={props.handleOpen} sx={{color: theme.palette.mode === 'dark' ? 'primary.main' : undefined}}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
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
      <CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button size="small" startIcon={<LanguageIcon/>} sx={{flex: 1}}>
          LIVE DEMO
        </Button>
        <Button size="small" startIcon={<GitHubIcon/>} sx={{flex: 1}}>
          VIEW ON GITHUB
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}