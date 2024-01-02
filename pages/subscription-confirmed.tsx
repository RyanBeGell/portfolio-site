import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Divider, Paper, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import MUILink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SubscriptionConfirmed() {
  const theme = useTheme();
  const router = useRouter()

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          maxWidth: '500px',
          maxHeight: '600px',
          mt: 4, // Adjust this value to account for the navbar height (56px / 2 = 28px)
        }}
      >
        <Box sx={{ p: 4 }}>
          <MarkEmailReadIcon
            sx={{ fontSize: '64px', fontColor: '#66bb6a' }}
            color="primary"
          />
          <Typography variant={'h5'} fontWeight="700" sx={{ mb: 4 }}>
            Thanks for subscribing!
          </Typography>
          <Typography variant="body1">
            You have been successfully added to the blog subscriber list. You
            will now receive email notifications about my latest posts and blog updates.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<NavigateBeforeIcon />}
            onClick={() => router.push('/blog')}
            sx={{ my: 4, textTransform: 'none' }}
          >
            Return to blog
          </Button>
          <Divider sx={{ mb: 4 }} />
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
        {/* typography paragraph */}
      </Paper>
      <Typography variant={'subtitle2'} color="text.secondary" sx={{ pt: 4 }}>
        Changed your mind? If you wish to unsubscribe,{' '}
        <MUILink color="inherit"> click here.</MUILink>
      </Typography>
    </Box>
  );
}
