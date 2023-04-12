import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import FooterIcon from './FooterIcon';
const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <Box display="flex" justifyContent="space-between" alignItems={'center'}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <Image height={25} width={25} src="/favicon.png" style={{ cursor: 'pointer' }}/>
        </Link>
          <Divider orientation="vertical" />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: '8px', my: '1px' }}
        />
        <Typography variant={'subtitle2'} color="text.navFooter">
          &copy; {year} Ryan BeGell
        </Typography>
      </Box>
      <Box display="flex">
        <FooterIcon type="GitHub" />
        <FooterIcon type="LinkedIn" color="linkedInBlue" />
        <FooterIcon type="Email" color="gmailRed" />
      </Box>
    </Box>
  );
};

export default Footer;
