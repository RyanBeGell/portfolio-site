import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';

export default function Contact() {
  const styles = {
    link: {
      '&:hover': {
        color: 'red',
      },
    },
  };

  return (
    <>
      <Box className="centerBox" sx={{ minHeight: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '1000px', width: '100%', mx: 4 }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={'center'}
              alignItems="center"
              textAlign={'center'}
              sx={{ my: 10 }}
            >
              <Typography
                variant={'h5'}
                className={'neutraface'}
                sx={{ mb: 0, color: 'primary.main' }}
              >
                Contact
              </Typography>
              <Typography variant={'h3'} className={'neutraface'}>
                Reach out and{' '}
                <Typography
                  variant={'h3'}
                  component={'span'}
                  className={'neutraface'}
                  sx={{ color: 'primary.main'  }}
                >
                  connect
                </Typography>{' '}
                with me
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Fill in the contact form below or contact me anytime at{' '}
                <Link
                  href="#"
                  color='inherit'
                  sx={{
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                  rel="noopener"
                >
                  ryanbegell@outlook.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
