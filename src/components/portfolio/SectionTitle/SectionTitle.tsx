import { Box, Typography, useTheme } from '@mui/material';
import ScrollAnimation from '../../ScrollAnimation';
import styles from './SectionTitle.module.css';

export interface Props {
  title: string;
  title2?: string;
}

export default function SectionTitle(props: Props) {

  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';
  
  return (
    <ScrollAnimation animation={'fade'} timeout={500}>
      <Box className={darkMode ? styles.sectionDark : styles.section}>
        <Box sx={{ px: '16px', pb: '48px' }}>
          <Typography variant="h4">&nbsp;{props.title}</Typography>
          {props.title2 ? (
            <ScrollAnimation animation={'fade'} timeout={500}>
              <Typography
                variant="body1"
                sx={{
                  ml: '-16px',
                  mt: '16px',
                  mb: '-16px',
                  color: 'text.secondary',
                }}
              >
                {props.title2}
              </Typography>
            </ScrollAnimation>
          ) : null}
        </Box>
      </Box>
    </ScrollAnimation>
  );
}
