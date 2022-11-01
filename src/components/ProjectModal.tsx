import styles from '@/src/components/Projects.module.css';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ProjectModal(props: Props) {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <Grow in={props.open}>
        <Box className={styles.modal} sx={{ bgcolor: 'background.paper' }}>
          <CloseIcon
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
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Yo this is a modal
          </Typography>
        </Box>
      </Grow>
    </Modal>
  );
}
