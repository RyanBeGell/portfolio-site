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
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      maxWidth={'xl'}
      aria-labelledby="responsive-dialog-title"
    >
          <IconButton
            onClick={props.handleClose}
            className="xButton"
            sx={{
              color: 'text.secondary',
              ':hover': { color: 'red' },
            }}
          >
            <CloseIcon />
          </IconButton>
      <Grid
        display="flex"
        sx={{
          alignItems: fullScreen ? 'center' : '',
          justifyContent: fullScreen ? 'center' : '',
          flexDirection: fullScreen ? 'column' : 'row',
        }}
      >
        <Grid
          item
          sx={{
            py: '24px',
            pl: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pr: `${fullScreen ? '24px' : ''}`,
          }}
        >
          <Carousel />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          sx={{ width: '548px', p: '24px' }}
        >
          <DialogTitle>
            {"Use Google's location service?"}
            </DialogTitle>
          <DialogContent>
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
              py: '16px',
              px: '24px',
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
