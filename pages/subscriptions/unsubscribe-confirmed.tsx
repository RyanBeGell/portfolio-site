import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  LinearProgress,
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

  // State for managing loading spinner visibility
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
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
      {isLoading && (
        <LinearProgress
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000, // Ensure it's above other elements
          }}
        />
      )}
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
      <Box sx={{ m: 1, position: 'relative' }}>
      <Button
        variant="outlined"
        size='small'
        color="primary"
        onClick={handleResubscribe}
        disabled={isLoading} // Disable button when loading
      >
          resubscribe
        </Button>
        {isLoading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
      </Typography>
    </Box>
  );
}
