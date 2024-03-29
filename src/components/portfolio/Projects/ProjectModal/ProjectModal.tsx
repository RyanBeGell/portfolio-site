import IconsGrid from '@/src/components/Icons/Grid/IconsGrid';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carousel from './carousel/carousel';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ProjectModal(props: Props) {
  const theme = useTheme();
  const fullScreenModal = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreenModal}
      open={props.open}
      onClose={props.handleClose}
      maxWidth={'xl'}
      aria-labelledby="responsive-dialog-title"
    >
          <IconButton
            onClick={props.handleClose}
            className="xButton"
            sx={{
              color: 'primary.main',
              ':hover': { color: 'red' },
            }}
          >
            <CloseIcon />
          </IconButton>
      <Grid
        display="flex"
        sx={{
          alignItems: fullScreenModal ? 'center' : '',
          justifyContent: fullScreenModal ? 'center' : '',
          flexDirection: fullScreenModal ? 'column' : 'row',
        }}
      >
        <Grid
          item
          sx={{
            pl: `${fullScreenModal ? '' : '36px'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // p: `${fullScreen ? '24px' : ''}`,
          }}
        >
          <Carousel />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          sx={{ width: '564px', p:`${fullScreenModal ? '' : '36px'}`, px:`${fullScreenModal ? '36px' : ''}`}}
        >
          <DialogTitle sx={{pt:'0px', px:0}}>
            {"Use Google's location service?"}
            </DialogTitle>
          <DialogContent sx={{px:0}}>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
              <br /> <br />
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running. This means sending anonymous location data to Google,
                even when no apps are running.
            </DialogContentText>
            <Box>
              {/* Front End Section/Icons */}
              <Typography variant={'body1'} sx={{ pb: '8px', pt:'24px' }}>
                Technologies used
              </Typography>
              <IconsGrid
                componentNames={[
                  'ReactJS',
                  'TypeScript',
                  'MaterialUI',
                  'NextJS',
                  'Java',
                  'Spring',
                ]}
                height={24}
                width={24}
                spacing={2}
                noTitle={true}
              />
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'auto',
              px: '0px',
            }}
          >
            <Button
              fullWidth
              color="primary"
              variant={'contained'}
              sx={{ mr: '8px' }}
              startIcon={<LanguageIcon />}
            >
              LIVE DEMO
            </Button>
            <Button fullWidth variant={'outlined'} startIcon={<GitHubIcon />}>
              GITHUB
            </Button>
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
}
