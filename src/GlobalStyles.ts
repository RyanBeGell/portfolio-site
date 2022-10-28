import { createStyles, makeStyles } from '@mui/material'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
        pre:{ backgroundColor: '#0A1929 !important' },
        code: { backgroundColor: '#0A1929 !important' },
    } })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;