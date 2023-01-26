import ShareIcon from '@mui/icons-material/Share';
import { Chip } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useRef } from 'react'


export interface Props {
  title?: string; //temporarily optional
  body?: string; //temporarily optional
  path?: string;
  image?: string; //temporarily optional
  date?: string;
  chip1?: string;
  chip2?: string;
  chip3?: string;
}

export default function BlogCard(props: Props) {
  const theme = useTheme();
  const [showExcerpt, setShowExcerpt] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgHeightWidth, setImgHeightWidth] = useState({ height: '220px', width: '220px' });

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        // if (cardWidth >= 550) {
        //   setShowExcerpt(true);
        // } else {
        //   setShowExcerpt(false);
        // }
        if (cardWidth < 450) {
          setImgHeightWidth({height: '150px', width: '150px'})
          setShowExcerpt(false);
        } else {
          setImgHeightWidth({height: '220px', width: '220px'})
          setShowExcerpt(true);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    //clear out the last event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [cardRef, showExcerpt]);

  return (
    <Card raised ref={cardRef} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ pl: '24px !important', pt: '24px' }}>
          <Typography
            variant="subtitle2"
            component="span"
            noWrap
            sx={{ color: 'text.secondary' }}
          >
            {'Jan 22, 2022'}
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            noWrap
            sx={{ color: 'text.secondary', px: '8px' }}
          >
            ·
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            noWrap
            sx={{ color: 'text.secondary' }}
          >
            {2 + ' min read'}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{ mt: '8px', mb: '8px' }}
          >
            I Asked ChatGPT to Create Comics, Then I Drew Them
          </Typography>
          <Box className="ellipsisBox">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              className={`${showExcerpt === true ? null : 'invisible'}`}
            >
              By now you’ve likely heard of ChatGPT, the open AI chatbot that
              seemingly does everything from being able to write code, write...
              By now you’ve likely heard of ChatGPT, the open AI chatbot that
              seemingly does everything from being able to write code, write...
              By now you’ve likely heard of ChatGPT, the open AI chatbot that
              seemingly does everything from being able to write code, write...
              By now you’ve likely heard of ChatGPT, the open AI chatbot that
              seemingly does everything from being able to write code, write...
            </Typography>
          </Box>
        </CardContent>
        <Box display="flex" sx={{ px: '24px', mt: 'auto', mb: '24px' }}>
          <Chip label="Music" size="small" sx={{ mr: '4px' }} />
          <Chip label="ChatGPT" size="small" sx={{ mx: '4px' }} />
          <Chip label="AI" size="small" sx={{ ml: '4px', mr: '8px' }} />
          <ShareIcon
            sx={{
              ml: 'auto',
              color: 'text.blogIcons',
              fontSize: '25px',
              mr:'-24px',
              '&:hover': { color: 'primary.main', cursor: 'pointer' },
            }}
          />
        </Box>
      </Box>
      <Box  display='flex' alignItems='center' >
      <CardMedia
          component="img"
          sx={{ 
              height: imgHeightWidth.height, 
              width: imgHeightWidth.width, 
              py:'24px', pl:'24px', pr:'24px', 
          }}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
      />
      </Box>
    </Card>
  );
}