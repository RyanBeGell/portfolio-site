import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { InputAdornment, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ShareDialog(props: Props) {
  const [copySuccess, setCopySuccess] = useState(false);

  const link = 'www.example.com/blog/post/example';

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
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>
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
          <IconButton
            size="large"
            sx={{ border: '1px solid', mr: '8px', color: '#0077b5' }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#FF5700' }}
          >
            <RedditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#1DA1F2' }}
          >
            <TwitterIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#25D366' }}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#ff2800' }}
          >
            <EmailIcon fontSize="inherit" />
          </IconButton>
          
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
              sx={{ bgcolor: 'background.default' }}
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
    </>
  );
}
