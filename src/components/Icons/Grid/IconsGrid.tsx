import * as Icons from '@/src/components/Icons';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

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

  return (
    <Grid container spacing={spacing}>
      {componentNames.map((name, index) => {
        const DynamicComponent = (Icons as Record<string, any>)[name];
        return (
          <Grid item textAlign="center" key={index} sx={{ width: '120px' }}>
            <Box className="trigger-icons" sx={{ cursor: 'pointer' }}>
              {/* If no title, render a tooltip to show what the icon is on hover */}
              {noTitle && (
                <Tooltip title={name}>
                  {/* Div(Box) allows for tooltip to work */}
                  <Box className="third">
                    <DynamicComponent
                      key={name}
                      height={height}
                      width={width}
                      fill={primary}
                    />
                  </Box>
                </Tooltip>
              )}
              {!noTitle && (
                <>
                  <DynamicComponent
                    key={name}
                    height={height}
                    width={width}
                    fill={primary}
                  />
                  <Divider
                    className="second"
                    sx={{
                      bgcolor: (theme) => theme.palette.primary.main,
                      height: 2,
                      my: 1,
                      mx: '20%',
                    }}
                  />
                  <Typography
                    className="first"
                    variant={'body1'}
                    sx={{ color: 'primary.main' }}
                  >
                    {name}
                  </Typography>
                </>
              )}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default IconsGrid;
