import ShareIcon from '@mui/icons-material/Share';
import { Chip, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ShareDialog from '../ShareDialogue/ShareDialogue';
export interface Props {
  title: string;
  body: string;
  path: string;
  image: string;
  date: string;
  minsToRead: number;
  chips?: string[];
}

export default function BlogCard(props: Props) {
  const theme = useTheme();
  const [showExcerpt, setShowExcerpt] = useState(true);
  const [smallBox, setSmallBox] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imgHeightWidth = {
    height: smallBox ? '128px' : '200px',
    width: smallBox ? '128px' : '200px',
  };

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        if (cardWidth < 450) {
          setSmallBox(true);
          setShowExcerpt(false);
        } else {
          setSmallBox(false);
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
        <CardContent
          sx={{
            pl: smallBox ? '16px ' : '24px ',
            pt: smallBox ? '8px' : '16px',
            pr: '0px',
            pb: smallBox ? '8px !important' : '16px !important',
          }}
        >
          <Typography
            variant="subtitle2"
            component="span"
            noWrap
            sx={{ color: 'text.secondary' }}
          >
            {props.date}
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
            {props.minsToRead + ' min read'}
          </Typography>
          <Link href={`/blog/posts/${props.path}`}>
            <Typography
              component="div"
              variant={smallBox ? 'h6' : 'h5'}
              sx={{
                mt: '8px',
                mb: '8px',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
              className="clamp3"
            >
              {props.title}
            </Typography>
          </Link>
          <Box className="ellipsisBox">
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              className={`${showExcerpt === true ? null : 'invisible'}`}
            >
              {props.body}
            </Typography>
          </Box>
          <Box display="flex" sx={{ mt: '16px', alignItems: 'center' }}>
            <Grid container spacing={1} sx={{ alignItems: 'center' }}>
              {props.chips?.map((chip, index) => (
                <Grid item key={chip}>
                  <Chip label={chip} size="small" />
                </Grid>
              ))}
            </Grid>
            <IconButton
              onClick={handleClickOpen}
              sx={{
                ml: 'auto',
                color: 'text.blogIcons',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <ShareIcon />
            </IconButton>
          </Box>
        </CardContent>
        <ShareDialog open={open} handleClose={handleClose} />
      </Box>
      <Box display="flex" alignItems="center">
        <CardMedia
          component="img"
          sx={{
            height: imgHeightWidth.height,
            width: imgHeightWidth.width,
            py: smallBox ? '16px' : '24px',
            px: smallBox ? '16px' : '24px',
          }}
          image="https://mui.com/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
}
