import { Chip, Grid, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
  const [showExcerpt, setShowExcerpt] = useState(true);
  const [boxSize, setBoxSize] = useState<'small' | 'medium' | 'large'>('large');
  const cardRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imgHeightWidth = {
    height: boxSize === 'small' ? '128px' : '200px',
    width: boxSize === 'small' ? '128px' : '200px',
  };

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        if (cardWidth < 450) {
          setBoxSize('small');
        } else if (cardWidth < 520) {
          setBoxSize('medium');
        } else {
          setBoxSize('large');
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
    <Card
      raised={!darkMode}
      ref={cardRef}
      variant={darkMode ? 'outlined' : undefined}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <CardContent
        sx={{
          pl: boxSize === 'small' ? '16px ' : '24px ',
          pt: boxSize === 'small' ? '12px' : '16px',
          pr: '0px',
          pb: boxSize === 'small' ? '8px !important' : '16px !important',
        }}
      >
        <Typography
          variant="body2"
          component="span"
          noWrap
          sx={{ color: 'text.secondary' }}
        >
          {props.date + ' · ' + props.minsToRead + ' min read'}
        </Typography>
        <Link href={`/blog/posts/${props.path}`}>
          <Typography
            component="div"
            variant={'h6'}
            sx={{
              mt: '8px',
              mb: '8px',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            className="ellipsisBox"
          >
            {props.title}
          </Typography>
        </Link>
        <Box className="ellipsisBox">
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            className={`${boxSize === 'small' ? 'invisible' : null}`}
          >
            {props.body}
          </Typography>
        </Box>
        <Box display="flex" sx={{ mt: '8px', alignItems: 'center' }}>
          <Grid container spacing={1} sx={{ alignItems: 'center' }}>
            {props.chips?.map((chip, index) => (
              <Grid item key={chip}>
                <Chip
                  label={chip}
                  size="small"
                  sx={{ borderRadius: 1 }}
                  onClick={() =>
                    router.push({
                      pathname: '/blog',
                      query: { tag: chip },
                    })
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 'auto',
          p: '8px',
        }}
      >
        <Button
          variant="text"
          sx={{ whiteSpace: 'noWrap', textTransform: 'none' }}
          endIcon={<KeyboardArrowRightIcon/>}
        >
          Read more
        </Button>
      </Box>
    </Card>
  );
}
