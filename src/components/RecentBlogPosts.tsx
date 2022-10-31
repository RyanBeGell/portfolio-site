import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useContext } from 'react';
import { ColorModeContext } from '../../pages/_app';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';

export interface Props{
    themeMode?: string, //Takes in themeMode prop to conditionally render button style 
}

export default function RecentBlogPosts(props: Props){

    const {mode} = useContext(ColorModeContext);

    return(<>
    <Box className="centerBox">
        <Grid sx={{ maxWidth:1150}}>
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
                <Button size='large' endIcon={<ArrowCircleRightIcon/>} variant={`${mode=='dark'?'outlined':'contained'}`}>
                    View Blog
                </Button>
            </Grid>
        </Grid>
    </Box>
    </>)
}