import * as Icons from '@/src/components/Icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Divider, Grid, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ScrollAnimation from '../../ScrollAnimation';
import styles from './IconsGrid.module.css';

export interface Props {
  componentNames: string[];
  height: number;
  width: number;
  spacing: number;
  noTitle?: boolean;
}

const IconsGrid: React.FC<Props> = ({
  componentNames,
  height,
  width,
  spacing,
  noTitle = false,
}) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const router = useRouter();

  return (
    <Grid container spacing={spacing}>
      {componentNames.map((name, index) => {
        const DynamicComponent = (Icons as Record<string, any>)[name];
        return (
          <Grid
            item
            textAlign="center"
            key={index}
            sx={{ width: noTitle ? 'auto' : '120px' }}
          >
            {/* If no title, render a tooltip to show what the icon is on hover */}
            {noTitle && (
              <Tooltip title={name}>
                {/* div serves as child element to allow for tooltip to work*/}
                <div>
                  <DynamicComponent
                    key={name}
                    height={height}
                    width={width}
                    fill={primary}
                  />
                </div>
              </Tooltip>
            )}
            {!noTitle && (
              <ScrollAnimation animation={'fade'} timeout={1000 + index * 250}>
                <Tooltip
                  enterDelay={500}
                  enterNextDelay={500}
                  title={
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      View projects using {name} &nbsp;
                      <ArrowForwardIcon fontSize="inherit" />
                    </span>
                  }
                >
                  <Box
                    className={`${styles.customIcon} hover-pointer`}
                    onClick={() => router.push(`/portfolio?tag=${name}`)}
                  >
                    <DynamicComponent
                      key={name}
                      height={height}
                      width={width}
                      fill={primary}
                      Style
                    />
                    <Divider
                      id={styles.divider}
                      sx={{
                        bgcolor: 'primary.main',
                        height: 2,
                        my: 1,
                        mx: '20%',
                      }}
                    />
                    <Typography
                      id={styles.title}
                      variant={'body1'}
                      sx={{ color: 'primary.main' }}
                    >
                      {name}
                    </Typography>
                  </Box>
                </Tooltip>
              </ScrollAnimation>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default IconsGrid;
