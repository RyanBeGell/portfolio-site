import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { ColorModeContext } from 'pages/_app';
import { useContext, useState } from 'react';

export interface Props {
  date: String;
  minRead: Number;
  title: String;
}

export default function Header(props: Props) {
  const { mode } = useContext(ColorModeContext);

  const [open, setOpen] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText('http://localhost:3000/blog/posts/onions');
    setOpen(true);
    setTimeout(() => setOpen(false), 2000);
  }

  function handleClose() {
    setOpen(false);
  }

  const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      padding: '0px',
      backgroundColor: 'transparent',
    },
  }));

  return (
    <>
      <Box sx={{ mb: '32px' }}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Avatar
              src={'/avatar.svg'}
              alt="Avatar"
              sx={{ height: '48px', width: '48px', float: 'left', mr: '16px' }}
            />
            <Typography variant="subtitle1">Ryan BeGell</Typography>
            <Typography
              variant="subtitle2"
              component="span"
              noWrap
              sx={{ color: 'text.secondary' }}
            >
              {props.date}
            </Typography>
            <Typography
              variant="subtitle2"
              component="span"
              noWrap
              sx={{ color: 'text.secondary', px: '8px' }}
            >
              ·
            </Typography>
            <Typography
              variant="subtitle2"
              component="span"
              noWrap
              sx={{ color: 'text.secondary' }}
            >
              {props.minRead + ' min read'}
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Box position="relative" sx={{ top: '25%' }}>
              <Tooltip title="Share on Reddit" placement="top" arrow>
                <RedditIcon
                  sx={{
                    color: 'text.blogIcons',
                    mr: '8px',
                    fontSize: '25px',
                    '&:hover': { color: '#FF5700', cursor: 'pointer' },
                  }}
                />
              </Tooltip>
              <Tooltip title="Share on Twitter" placement="top" arrow>
                <TwitterIcon
                  sx={{
                    color: 'text.blogIcons',
                    mr: '8px',
                    fontSize: '25px',
                    '&:hover': { color: '#1DA1F2', cursor: 'pointer' },
                  }}
                />
              </Tooltip>
              <Tooltip
                title="Share on LinkedIn"
                placement="top"
                arrow
                color="text.primary"
              >
                <LinkedInIcon
                  sx={{
                    color: 'text.blogIcons',
                    mr: '8px',
                    fontSize: '25px',
                    '&:hover': { color: '#0077b5 ', cursor: 'pointer' },
                  }}
                />
              </Tooltip>
              <CustomTooltip
                open={open}
                sx={{}}
                title={
                  <>
                    {mode == 'light' ? (
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        variant={'filled'}
                        sx={{ width: '100%' }}
                      >
                        Link copied
                      </Alert>
                    ) : (
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: '100%' }}
                      >
                        Link copied
                      </Alert>
                    )}
                  </>
                }
                placement="top"
                leaveDelay={2000}
                /* 
                 Since the Link icon is transformed diagonal, 
                 it's vertical anchor is 5.18px higher , 
                 so -5.18px negative bottom margin
                 on it's tooltip to compensate 
                */ 
                PopperProps={{ sx: { mb: '-5.18px !important' } }}
              >
                {!open ? (
                  <Tooltip
                    title="Copy link"
                    placement="top"
                    arrow
                    PopperProps={{ sx: { mb: '-5.18px !important' } }}
                  >
                    {/* Mui link icon is horizontal, -45 deg rotate because I think it looks a bit nicer diagonal */}
                    <LinkIcon
                      onClick={handleClick}
                      sx={{
                        color: 'text.blogIcons',
                        transform: 'rotate(-45deg)',
                        fontSize: '25px',
                        '&:hover': { color: '#666666', cursor: 'pointer' },
                      }}
                    />
                  </Tooltip>
                ) : (
                  <LinkIcon
                    onClick={handleClick}
                    sx={{
                      color: 'text.blogIcons',
                      transform: 'rotate(-45deg)',
                      fontSize: '25px',
                      '&:hover': { color: '#666666', cursor: 'pointer' },
                    }}
                  />
                )}
              </CustomTooltip>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ pb: '16px' }}>
        <h4>{props.title}</h4>
      </Box>
    </>
  );
}