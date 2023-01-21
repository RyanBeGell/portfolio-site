import { Grid, Typography } from '@mui/material';

const SidebarFooter = () => {
  const year: number = new Date().getFullYear();

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ pt: '16px' }}
      >
        <Typography variant={'subtitle2'} color="text.navFooter">
          &copy; {year} Ryan BeGell
        </Typography>
      </Grid>
    </>
  );
};

export default SidebarFooter;
