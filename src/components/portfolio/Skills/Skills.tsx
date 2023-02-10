import IconsGrid from '@/src/Icons/Grid/IconsGrid';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Skills() {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  return (
    <>
      <Box className="centerBox">
        <Grid>
          <Grid item>
            <SectionTitle title="Skills" />
          </Grid>
          <Grid item sx={{ mt: '-8px' }}>
            {/* Front End Section/Icons */}
            <Typography variant={'h5'} sx={{ pb: '16px' }}>
              Front End
            </Typography>
            <IconsGrid
              componentNames={[
                'ReactJS',
                'JavaScript',
                'TypeScript',
                'CSS3',
                'HTML5',
                'MaterialUI',
                'NextJS',
              ]}
              height={64}
              width={64}
              spacing={4}
            />
            <Typography variant="h5" sx={{ py: '16px' }}>
              Back End
            </Typography>
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
    </>
  );
}
