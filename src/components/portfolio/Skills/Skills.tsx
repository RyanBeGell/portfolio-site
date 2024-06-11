import IconsGrid from '@/src/components/Icons/Grid/IconsGrid';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Skills() {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <Box className="centerBox">
      <Grid>
        <Grid item>
          <SectionTitle title="Skills" />
        </Grid>
        <Grid item sx={{ mt: '-8px' }}>
          {/* Front End Section/Icons */}
          <ScrollAnimation animation={'fade'} timeout={500}>
            <Typography variant={'h5'} fontWeight={'500'} sx={{ pb: '16px' }}>
              Front End
            </Typography>
          </ScrollAnimation>
          <IconsGrid
            componentNames={[
              'ReactJS',
              'Redux',
              'NextJS',
              'JavaScript',
              'TypeScript',
              'Tailwind',
              'MaterialUI',
              'HTML5',
              'CSS3',
            ]}
            height={64}
            width={64}
            spacing={4}
          />
          <ScrollAnimation animation={'fade'} timeout={500}>
            <Typography variant="h5" fontWeight={'500'} sx={{ py: '16px' }}>
              Back End
            </Typography>
          </ScrollAnimation>
          <IconsGrid
            componentNames={[
              'Java',
              'Spring',
              'NodeJS',
              'PostgreSQL',
              'OracleDB',
              'Docker',
              'AWS',
            ]}
            height={64}
            width={64}
            spacing={4}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
