import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Chip, Grid, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { blue } from '@mui/material/colors';

export interface Props {
  title: string;
  body: string;
  path: string;
  date: string;
  minsToRead: number;
  chips?: string[];
  transparent?: boolean; 
}

export default function BlogCard(props: Props) {
  const router = useRouter();
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  return (
    <Card
      raised={!darkMode}
      variant={darkMode ? 'outlined' : 'outlined'}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        '&:hover': {
          borderColor: darkMode ? 'primary.main' : '#c7d0dd',
          boxShadow: props.transparent ? 0 : 6, 
        },
        backgroundColor: props.transparent ? 'transparent' : 'background.paper', 
        border: props.transparent ? 'none' : 'null',
      }}
    >
      <CardContent
        sx={{
          px: props.transparent ? '0px': '16px ',
          pt: '12px',
          pb: '12px !important',
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
              color:darkMode? 'primary.light':'inherit',
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
          <Typography variant="body2" color="text.secondary" component="div">
            {props.body}
          </Typography>
        </Box>
        <Box display="flex" sx={{ mt: '16px', alignItems: 'center' }}>
          <Grid container spacing={1} sx={{ alignItems: 'center' }}>
            {props.chips?.map((chip, index) => (
              <Grid item key={chip}>
                <Chip
                  label={chip}
                  size="small"
                  sx={{ borderRadius: 1, fontWeight:'500',  border:'1px solid', borderColor:'rgba(0, 76, 153, 0.5)', backgroundColor:'rgba(0, 58, 117, 0.4)', '&:hover': {backgroundColor:'primary.main'} }}
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 'auto',
            }}
          >
            <Button
              variant="text"
              sx={{ whiteSpace: 'noWrap', textTransform: 'none' }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              Read more
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}