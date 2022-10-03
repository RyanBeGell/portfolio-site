import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import styles from '@/src/components/Projects.module.css'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import BlogCard from './BlogCard';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SectionTitle from './SectionTitle';

export interface Props{
    themeMode?: string, //Takes in themeMode prop to conditionally render button style 
  }
export default function RecentBlogPosts(props: Props){

    return(<>
    <Box className="centerBox">
        <Grid>
            <Grid item>
                <SectionTitle title="Recent Blog Posts"/>
            </Grid>
            <Grid item>
                <Grid
                container
                spacing={4}
                sx={{ pb:'48px'}}
                justifyContent="center"
                >
                    <BlogCard 
                            title="Lizard"
                            body="Lizards are a widespread group of squamate reptiles,
                                with over 6,000 species, ranging across all continents except Antarctica"
                        />
                    <BlogCard 
                            title="Lizard"
                            body="Lizards are a widespread group of squamate reptiles,
                                with over 6,000 species, ranging across all continents except Antarctica"
                        />
                    <BlogCard 
                            title="Lizard"
                            body="Lizards are a widespread group of squamate reptiles,
                                with over 6,000 species, ranging across all continents except Antarctica"
                        />
                </Grid>
            </Grid>
            <Grid item justifyContent={'center'} textAlign='center'>
                {/* Render button outlined in dark mode, contained in light mode */}
                <Button size='large' variant={`${props.themeMode=='dark'?'outlined':'contained'}`}>
                    View Blog &nbsp;<ArrowCircleRightIcon/>
                </Button>
            </Grid>
        </Grid>
    </Box>
    </>)
}