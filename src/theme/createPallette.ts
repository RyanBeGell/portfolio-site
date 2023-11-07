import { PaletteMode } from '@mui/material';

//Custom Pallette for Light/Dark mode theme
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'dark'
        ? {
            main: '#2196F3',
            light: '#66b2ff',
            dark: '#007FFF',
          }
        : {
            main: '#0d6efd',
            light: '#2196F3',
            dark: '#0059b2',
          }),
    },
    secondary: {
      ...(mode === 'dark'
      ? {
          main: '#66b2ff',
        }
      : {
          main: '#2196F3',
        }),
    },
    info: {
      main: '#42a5f5',
      light: '#64b5f6',
      dark: '#1976d2',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
    },
    warning: {
      main: '#ffa726',
      light: '#ffb74d',
      dark: '#f57c00',
    },

    background: {
      ...(mode === 'dark'
        ? {
            default: '#0A1929',
            dark: '#0A1929',
            // dark: '#091725',
            paper: '#001e3c',
            nav: '#001e3c',
            blogNav: 'rgba(0, 30, 60, .7)',
            paperDivider: 'rgb(19, 47, 76)',
          }
        : {
            default: '#f6f9fb',
            light: '#FFFFFF',
            paper: '#FFFFFF',
            nav: '#0d6efd',
            blogNav: 'rgba(255,255,255, .7)',
            paperDivider: 'rgb(224, 227, 231)',
          }),
    },
    text: {
      ...(mode === 'dark'
        ? {
            primary: '#ffffff',
            contrast: '#2196F3',
            secondary: 'rgba(255, 255, 255, 0.7)',
            navFooter: '#bfbfbf',
            blogIcons: 'rgba(255, 255, 255, 0.7)',
          }
        : {
            primary: '#000000',
            contrast: '#114b7a',
            blogIcons: '#64727f',
            secondary: '#64727f',
            navFooter: '#e0e0e0',
          }),
    },
    typography: {
      ...(mode === 'dark'
        ? {
            p: {
              color: 'rgba(255, 255, 255, 0.7) !important',
            },
          }
        : {}),
    },

    action: {
      ...(mode === 'dark'
        ? {
            hover: '#0072E540',
            arrow: '#0072E52B',
          }
        : {
            hover: '#0254cdAD',
            arrow: '#0d6efd12',
          }),
    },
  },
  //  Override MUI from changing paper opacity automatically in dark mode based on elevation
  components: {
    MuiPaper: {
      styleOverrides: { root: { backgroundImage: 'unset' } },
    },
  },
});
