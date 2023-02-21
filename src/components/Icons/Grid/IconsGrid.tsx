import * as Icons from '@/src/components/Icons';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';

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
      {componentNames.map((name,index) => {
        const DynamicComponent = (Icons as Record<string, any>)[name];
        return (
          //index is stable here, this array doesn't change after build time
          <Box key={index} >
            <Grid textAlign="center">
              <DynamicComponent
                height={height}
                width={width}
                fill={primary}
              />
              {!noTitle && (
                <>
                  <Divider
                    sx={{
                      bgcolor: (theme) => theme.palette.primary.main,
                      height: 2,
                      my: 1,
                    }}
                  />
                  <Typography variant={'body1'} sx={{ color: 'primary.main' }}>
                    {name}
                  </Typography>
                </>
              )}
            </Grid>
          </Box>
        );
      })}
    </Grid>
  );
};

export default IconsGrid;
