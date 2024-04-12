import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import ProjectModal from '../ProjectModal/ProjectModal';
import styles from './ProjectCard.module.css';

export interface Props {
  title: string; //temporarily optional
  subtitle: string;
  body: string; //temporarily optional
  image?: string; //temporarily optional
  githubLink?: string;
  demoLink?: string;
  tags: string[];
}

export default function ProjectCard(props: Props) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      raised={!darkMode}
      id={styles.card}
      variant={darkMode ? 'outlined' : undefined}
    >
      <ProjectModal
        open={open}
        handleClose={handleClose}
        title={props.title}
        body={props.body}
        demoLink={props.demoLink}
        githubLink={props.githubLink}
        tags={props.tags}
      />
      <CardActionArea
        onClick={handleOpen}
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
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ mx: '4px' }}>
        {props.githubLink ? (
          <Button
            href={props.githubLink}
            target="_blank"
            size="small"
            startIcon={<GitHubIcon />}
          >
            {'GITHUB'}
          </Button>
        ) : null}
        {props.demoLink ? (
          <Button
            size="small"
            href={props.demoLink}
            target="_blank"
            startIcon={<LanguageIcon />}
          >
            {'LIVE DEMO'}
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
