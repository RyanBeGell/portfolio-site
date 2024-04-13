import SendIcon from '@mui/icons-material/Send';
import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  useTheme,
} from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Contact() {
  const theme = useTheme();

  // State for managing loading spinner visibility
  const [isLoading, setIsLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCloseSuccess = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessOpen(false);
  };

  const handleCloseError = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorOpen(false);
  };

  const handleMailTo = () => {
    window.location.href =
      'mailto:ryanbegell@outlook.com?subject=Contact Form Issue';
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    console.log(formData); // will be changed to AWS SES

    // API Gateway URL to trigger my lambda function
    const apiEndpoint =
      'https://p0p2y1r5u0.execute-api.us-east-1.amazonaws.com/prod/submit';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsLoading(false);
        const result = await response.json();
        console.log(result.message); // Success message
        setSuccessOpen(true);
        //TODO: reset the form or display a success message
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setIsLoading(false);
        // Handle server errors or invalid responses
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorOpen(true);
    }
  };

  return (
    <>
      <Box className="centerBox">
        <SectionTitle
          title="Get in Touch"
          title2="Feel free to contact me anytime"
        />
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ maxWidth: 1150 }}
        >
          <ScrollAnimation animation={'fade'} timeout={500}>
            <div>
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
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation={'fade'} timeout={500}>
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
          </ScrollAnimation>
          <ScrollAnimation animation={'fade'} timeout={500}>
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
          </ScrollAnimation>
          <ScrollAnimation animation={'fade'} timeout={500}>
            <div>
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
              <div>
                <Box
                  sx={{ m: 1, position: 'relative', display: 'inline-flex' }}
                >
                  <Button
                    size="large"
                    variant={`${
                      theme.palette.mode === 'dark' ? 'outlined' : 'contained'
                    }`}
                    sx={{ mt: '16px' }}
                    startIcon={<SendIcon />}
                    type="submit"
                    disabled={isLoading}
                  >
                    Send Message
                  </Button>
                  {isLoading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-4px',
                        marginLeft: '-12px',
                        zIndex: 1,
                      }}
                    />
                  )}
                  <Snackbar
                    open={successOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseSuccess}
                  >
                    <Alert
                      onClose={handleCloseSuccess}
                      severity="success"
                      variant="filled"
                      sx={{ width: '100%' }}
                    >
                      Message sent
                    </Alert>
                  </Snackbar>
                  <Snackbar
                    open={errorOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseError}
                  >
                    <Alert
                      onClose={handleCloseError}
                      severity="error"
                      variant="filled"
                      sx={{ width: '100%' }}
                      action={
                        <Button
                          color="inherit"
                          variant="outlined"
                          size="small"
                          onClick={handleMailTo}
                        >
                          Email Me Directly
                        </Button>
                      }
                    >
                      Something went wrong!
                    </Alert>
                  </Snackbar>
                </Box>
              </div>
            </div>
          </ScrollAnimation>
        </Box>
      </Box>
    </>
  );
}
