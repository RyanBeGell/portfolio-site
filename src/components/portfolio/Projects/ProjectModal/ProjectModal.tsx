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
import React from 'react';
import Carousel from './carousel/carousel';

export interface Props {
  open: boolean;
  handleClose: () => void;
  title?: string; //temporarily optional
  body: string; //temporarily optional
  image?: string; //temporarily optional
  githubLink?: string;
  demoLink?: string;
  tags: string[];
}

interface FormatTextProps {
  text: string;
}

export default function ProjectModal(props: Props) {
  const theme = useTheme();
  const fullScreenModal = useMediaQuery(theme.breakpoints.down('md'));

  //TODO: make image always match right hand size
  const FormatText: React.FC<FormatTextProps> = ({ text }) => {
    const paragraphs = text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
    return <>{paragraphs}</>;
  };

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
          }}
        >
          <Carousel />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          sx={{
            width: '564px',
            p: `${fullScreenModal ? '' : '36px'}`,
            px: `${fullScreenModal ? '36px' : ''}`,
          }}
        >
          <DialogTitle sx={{ pt: '0px', px: 0, alignItems: 'flexStart' }}>
            {props.title}
          </DialogTitle>
          <DialogContent sx={{ px: 0, pb: '16px' }}>
            <DialogContentText>
              <FormatText text={props.body} />
            </DialogContentText>
            <Box>
              {/* Front End Section/Icons */}
              <Typography variant={'body1'} sx={{ pb: '8px', pt: '16px' }}>
                Technologies used
              </Typography>
              <IconsGrid
                componentNames={props.tags}
                height={32}
                width={32}
                spacing={2}
                noTitle={true}
              />
            </Box>
          </DialogContent>
          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              p: '0px',
            }}
          >
            {props.demoLink ? (
              <Button
                href={props.demoLink}
                target="_blank"
                fullWidth
                color="primary"
                variant={'contained'}
                sx={{ mr: '8px' }}
                startIcon={<LanguageIcon />}
              >
                LIVE DEMO
              </Button>
            ) : null}
            {props.githubLink ? (
              <Button
                href={props.githubLink}
                target="_blank"
                fullWidth
                variant={`${props.demoLink ? 'outlined' : 'contained'}`}
                startIcon={<GitHubIcon />}
              >
                {`${props.demoLink ? 'GitHub' : 'GitHub Repository'}`}
              </Button>
            ) : null}
          </DialogActions>
        </Grid>
      </Grid>
    </Dialog>
  );
}
