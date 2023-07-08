import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, InputAdornment, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ShareDialog(props: Props) {
  const [copySuccess, setCopySuccess] = useState(false);

  const link = 'www.example.com/blog/post/example';

  const router = useRouter();
  const contentShift = router.pathname === '/' ? 'shiftContentRight' : '';
  const theme = useTheme();
  const darkMode = theme.palette.mode === 'dark';

  const icons = [
    { color: 'linkedInBlue', Icon: LinkedInIcon },
    { color: 'twitterBlue', Icon: TwitterIcon },
    { color: 'redditOrange', Icon: RedditIcon },
    { color: 'facebookBlue', Icon: FacebookIcon },
    { color: 'gmailRed', Icon: EmailIcon },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      className={contentShift}
    >
      <DialogTitle sx={{ mt: '8px' }}>
        Share
        <IconButton
          onClick={props.handleClose}
          sx={{
            float: 'right',
            color: 'text.secondary',
            ':hover': { color: 'red' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ mx: '24px' }} />
      <DialogContent>
        <Typography variant="body1" sx={{ mb: '16px' }}>
          Share this link via
        </Typography>
        <Grid container direction="row" spacing={3}>
          {icons.map(({ color, Icon }, index) => (
            <Grid item key={index}>
              <IconButton
                size="large"
                sx={{
                  backgroundColor: `var(--${color})`,
                  color: 'white',
                  '&:hover': {
                    color: `var(--${color})`,
                    backgroundColor: 'inherit',
                    boxShadow: 'inset 0 0 0 1px',
                  },
                }}
              >
                <Icon fontSize="inherit" />
              </IconButton>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" sx={{ my: '16px' }}>
          Copy Link
        </Typography>
        <div>
          <TextField
            value={link}
            size="small"
            fullWidth
            disabled
            variant="outlined"
            sx={{ bgcolor: 'background.default', mb: '16px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ mr: '-9px', textTransform: 'none' }}
                    onClick={() => (!copySuccess ? handleCopy() : undefined)}
                  >
                    {copySuccess === true ? 'Copied' : 'Copy'}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
