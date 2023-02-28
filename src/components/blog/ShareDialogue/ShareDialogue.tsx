import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ShareDialog(props: Props) {
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>
          Share
          <IconButton
            onClick={props.handleClose}
            sx={{ float: 'right', color:'text.secondary', ':hover': { color: 'red' } }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ mx: '24px' }} />
        <DialogContent>
          <DialogContentText sx={{ mb: '16px' }}>
            Share this link via
          </DialogContentText>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mr: '8px', color: '#0077b5' }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#1DA1F2' }}
          >
            <TwitterIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#FF5700' }}
          >
            <RedditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            sx={{ border: '1px solid', mx: '8px', color: '#25D366' }}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
          <DialogContentText sx={{ my: '16px' }}>Copy Link</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
