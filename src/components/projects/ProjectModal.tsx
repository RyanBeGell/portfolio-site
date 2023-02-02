import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from '../carousel/carousel';

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
      <Carousel />
    </Dialog>
  );
}
