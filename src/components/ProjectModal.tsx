import styles from '@/src/components/Projects.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Carousel from './carousel';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ProjectModal(props: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={'xl'}
      // fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      {/* <CloseIcon
        fontSize="large"
        onClick={props.handleClose}
        className={styles.xButton}
        sx={{
          color: 'text.secondary',
          '&:hover': {
            color: 'red',
            cursor: 'pointer',
          },
        }}
      /> */}
      <Carousel/>
    </Dialog>
  );
}
