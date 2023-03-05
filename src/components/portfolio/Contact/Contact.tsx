import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Contact() {
  const { mode } = useContext(ColorModeContext);

  return (
    <>
      <Box className="centerBox">
        <SectionTitle
          title="Get in Touch"
          title2="Feel free to contact me anytime"
        />
        <Box component="form" noValidate sx={{ maxWidth: 1150 }}>
          <TextField
            margin="normal"
            id="First Name"
            label="First Name"
            name="First Name"
            autoComplete="off"
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
            name="Last Name"
            autoComplete="off"
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
            sx={{
              '&:hover  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'primary.main',
                },
            }}
          />
          <Button
            size="large"
            variant={`${mode == 'dark' ? 'outlined' : 'contained'}`}
            sx={{ mt: '16px' }}
            startIcon={<SendIcon />}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
}