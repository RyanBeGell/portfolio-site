import SendIcon from '@mui/icons-material/Send';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import Link from '@mui/material/Link';
import { useState } from 'react';

export default function Contact() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // will be changed to AWS SES
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
              <Typography variant={'h3'} className={'neutraface'} sx={{my:'10px'}}>
                Reach out and{' '}
                <Typography
                  variant={'h3'}
                  component={'span'}
                  className={'neutraface'}
                  color={`${
                    theme.palette.mode === 'dark' ? 'primary.light' : undefined
                  }`}
                  sx={
                    theme.palette.mode === 'light'
                      ? {
                          background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }
                      : {}
                  }
                >
                  connect
                </Typography>{' '}
                with me
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fill in the contact form below or contact me anytime at{' '}
                <Link
                  href="#"
                  color="inherit"
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
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            id="First Name"
            label="First Name"
            name="firstName"
            autoComplete="off"
            value={formData.firstName}
            onChange={handleInputChange}
            sx={{
              width: '49%',
              mr: '2%',
              '&:hover  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                },
            }}
            color="primary"
          />
          <TextField
            margin="normal"
            id="Last Name"
            label="Last Name"
            name="lastName"
            autoComplete="off"
            value={formData.lastName}
            onChange={handleInputChange}
            sx={{
              width: '49%',
              '&:hover  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            autoComplete="off"
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            sx={{
              '&:hover  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            autoComplete="off"
            id="subject"
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            sx={{
              '&:hover  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                },
            }}
          />
          <TextField
            margin="normal"
            fullWidth
            multiline
            rows={6}
            autoComplete="off"
            id="message"
            label="Your message here"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            sx={{
              '&:hover  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                },
            }}
          />
          <Button
            size="large"
            variant={`${
              theme.palette.mode == 'dark' ? 'outlined' : 'contained'
            }`}
            sx={{ mt: '16px' }}
            startIcon={<SendIcon />}
            type="submit"
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
}
