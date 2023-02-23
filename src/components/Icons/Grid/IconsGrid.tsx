import * as Icons from '@/src/components/Icons';
import { Divider, Grid, Typography } from '@mui/material';
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
      {componentNames.map((name, index) => {
        const DynamicComponent = (Icons as Record<string, any>)[name];
        return (
          <Grid item textAlign="center" key={index}>
            <DynamicComponent
              key={name}
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
        );
      })}
    </Grid>
  );
};

export default IconsGrid;
