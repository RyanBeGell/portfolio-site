import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Divider, Paper, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import MUILink from '@mui/material/Link';
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

  const handleUnsubscribe = async () => {
    try {
      const unsubscribeUrl = `https://hz4rmymtz7.execute-api.us-east-1.amazonaws.com/prod/unsubscribe?token=${encodeURIComponent(
        token
      )}`;
      const response = await fetch(unsubscribeUrl);

      if (!response.ok) {
        throw new Error('Error in unsubscribe');
      }

      // Redirect to the unsubscribe confirmation page
      window.location.href = response.url;
    } catch (error) {
      console.error('Unsubscribe failed:', error);
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
          <MarkEmailReadIcon
            sx={{ fontSize: '64px', fontColor: '#66bb6a' }}
            color="primary"
          />
          <Typography variant={'h5'} fontWeight="700" sx={{ mb: 4 }}>
            Thanks for subscribing!
          </Typography>
          <Typography variant="body1">
            You have been successfully added to the blog subscriber list. You
            will now receive email notifications about my latest posts and blog
            updates.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<NavigateBeforeIcon />}
            onClick={() => router.push('/blog')}
            sx={{ mt: theme.spacing(4), textTransform: 'none' }}
          >
            Return to blog
          </Button>
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
        Changed your mind? If you wish to unsubscribe,{' '}
        <MUILink
          color="inherit"
          onClick={handleUnsubscribe}
          sx={{ '&:hover': { cursor: 'pointer' } }}
        >
          {' '}
          click here.
        </MUILink>
      </Typography>
    </Box>
  );
}
