import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SubscriptionConfirmed() {
  const theme = useTheme();
  const router = useRouter();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (!router.isReady) return;

    // Checking if the token is present and is a string
    const queryToken = router.query.token;

    if (typeof queryToken === 'string') {
      setToken(queryToken);
    }
  }, [router, router.isReady]);

  const url = new URL(
    'https://hz4rmymtz7.execute-api.us-east-1.amazonaws.com/prod/resubscribe'
  );

  url.searchParams.append('token', token);

  const handleResubscribe = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        window.location.href = `${
          responseData.redirectUrl
        }?token=${encodeURIComponent(token)}`;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('There was an error!', error);
      }
    }
  };

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
          <UnsubscribeIcon sx={{ fontSize: '64px' }} color="primary" />
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
      <Typography
        variant={'subtitle2'}
        color="text.secondary"
        sx={{ pt: 4, width: '90%' }}
      >
        Unsubscribe by accident? &nbsp;
        <Button size="small" variant="outlined" onClick={handleResubscribe}>
          {' '}
          Resubscribe{' '}
        </Button>
      </Typography>
    </Box>
  );
}
