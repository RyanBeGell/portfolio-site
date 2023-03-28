import { Box, Typography } from '@mui/material';

const SidebarFooter = () => {
  const year: number = new Date().getFullYear();

  return (
      <Typography
        variant={'subtitle2'}
        color="text.navFooter"
        sx={{ pt: '16px', width:'100%', textAlign:'center' }}
      >
        &copy; {year} Ryan BeGell
      </Typography>
  );
};

export default SidebarFooter;
