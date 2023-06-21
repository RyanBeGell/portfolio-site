import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import ScrollAnimation from '../../ScrollAnimation';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Contact() {
  const { mode } = useContext(ColorModeContext);

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
                <Button
                  size="large"
                  variant={`${mode == 'dark' ? 'outlined' : 'contained'}`}
                  sx={{ mt: '16px' }}
                  startIcon={<SendIcon />}
                  type="submit"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </Box>
      </Box>
    </>
  );
}
