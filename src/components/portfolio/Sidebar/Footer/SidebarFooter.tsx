import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const SidebarFooter = () => {
  const year: number = new Date().getFullYear();

  return (
    <>
      <Typography
        variant={'subtitle2'}
        color="text.navFooter"
        sx={{ pt: '16px', width:'100%', textAlign:'center',display: 'flex', alignItems:'center', justifyContent:'center' }}
      >
        <Link href="/">
          <Image height={22} width={22} src="/favicon.png" />
        </Link>
        &nbsp;&nbsp;&copy; {year} Ryan BeGell
      </Typography>
      </>
  );
};

export default SidebarFooter;
