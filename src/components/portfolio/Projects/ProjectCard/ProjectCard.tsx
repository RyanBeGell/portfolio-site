import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import styles from './ProjectCard.module.css';

export interface Props {
  title?: string; //temporarily optional
  body?: string; //temporarily optional
  image?: string; //temporarily optional
  handleOpen: () => void; //method to close modal which provides more information about the card
}

export default function ProjectCard(props: Props) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';
  return (
      <Card raised id={styles.card} variant={darkMode ? 'outlined' : undefined}>
        <CardActionArea
          onClick={props.handleOpen}
          sx={{
            color: theme.palette.mode === 'dark' ? 'primary.main' : undefined,
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="text.primary"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{mx:'4px'}}>
        <Button size="small" startIcon={<GitHubIcon />}>
            {'GITHUB'}
          </Button>
          <Button size="small"
            startIcon={<LanguageIcon />}
          >
            {'LIVE DEMO'}
          </Button>
        </CardActions>
      </Card>
  );
}
