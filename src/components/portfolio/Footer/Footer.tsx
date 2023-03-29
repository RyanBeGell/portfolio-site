import { Box, Typography } from '@mui/material';
import FooterIcon from './FooterIcon';

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <Box display="flex" justifyContent="space-between" alignItems={'center'}>
      <Typography variant={'subtitle2'} color="text.navFooter">
        &copy; {year} Ryan BeGell
      </Typography>
      <Box display='flex'>
        <FooterIcon type="GitHub" />
        <FooterIcon type="LinkedIn" color="linkedInBlue" />
        <FooterIcon type="Email" color="gmailRed" />
      </Box>
    </Box>
  );
};

export default Footer;
