import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FooterIcon from './FooterIcon';

const Footer = () => {
  const year: number = new Date().getFullYear();
  const router = useRouter();

  const handleNavigationClick = () => {
    router.push('/');
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems={'center'}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          onClick={handleNavigationClick}
          height={25}
          width={25}
          src="/favicon.png"
          style={{ cursor: 'pointer' }}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: '8px', my: '2px' }}
        />
        <Typography variant={'subtitle2'} color="text.secondary">
          &copy; {year} Ryan BeGell
        </Typography>
      </Box>
      <Box display="flex">
        <FooterIcon type="GitHub" />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: '8px', my: '2px' }}
        />
        <FooterIcon type="LinkedIn" color="linkedInBlue" />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: '8px', my: '2px' }}
        />
        <FooterIcon type="Email" color="gmailRed" />
      </Box>
    </Box>
  );
};

export default Footer;
