import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import { Box, Button, Divider, Paper, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MUILink from '@mui/material/Link';

export default function SubscriptionConfirmed() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      minHeight="100vh" // Ensure the entire viewport is covered
      justifyContent="center"
    >
      <Paper
        variant="outlined"
        sx={{
          maxWidth: '500px',
          p: theme.spacing(4),
          width: '90%', // Adjust the width as needed
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <UnsubscribeIcon
            sx={{ fontSize: '64px', fontColor: '#66bb6a' }}
            color="primary"
          />
          <Typography variant={'h5'} fontWeight="700" sx={{ mb: 4 }}>
            Unsubscribe Successful
          </Typography>
          <Typography variant="body1">
            You have successfully unsubscribed from email communications. 
          </Typography>
          <Divider sx={{ mt: theme.spacing(4), mb: theme.spacing(2) }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              height={25}
              width={25}
              src="/favicon.png"
              style={{ cursor: 'pointer' }}
            />
            <Typography variant={'body2'} className={'neutraface'}>
              &nbsp;&nbsp; Ryan BeGell
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Typography variant={'subtitle2'} color="text.secondary" sx={{ pt: 4, width: '90%', }}>
        Unsubscribe by accident? &nbsp;
        <Button size='small' variant='outlined'> Resubscribe </Button>
      </Typography>
    </Box>
  );
}
