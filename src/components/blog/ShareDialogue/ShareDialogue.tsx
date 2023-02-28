import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ShareDialog(props:Props) {
  
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Share</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Share this link via
          </DialogContentText>
          <DialogContentText>
            Copy Link
          </DialogContentText>
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