import LinkIcon from '@mui/icons-material/Link';
import { Avatar, Box, Popper, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { ColorModeContext } from 'pages/_app';
import React, { useContext, useState } from 'react';
import HeaderIcon from './HeaderIcon';
export interface Props {
  date: String;
  minRead: Number;
  title: String;
}

export default function Header(props: Props) {
  const { mode } = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & SVGSVGElement) | null
  >(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    //anchorE1 === null because we don't want this to run with the popper active
    if (anchorEl === null) {
      setAnchorEl(event.currentTarget);
      navigator.clipboard.writeText('http://localhost:3000/blog/posts/onions');
      setTimeout(() => {
        setAnchorEl(null);
      }, 3000); // close the popover after 3 seconds
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Box sx={{ mb: '32px' }}>
        <Grid container spacing={0}>
          <Grid item xs={8}>
            <Box
              sx={{ height: '48px', width: '48px', float: 'left', mr: '16px' }}
            >
              <Avatar
                alt="Ryan BeGell"
                src="avatar.svg"
                sx={{ height: '48px', width: '48px' }}
              />
            </Box>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              Ryan BeGell
            </Typography>
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
              <HeaderIcon type="LinkedIn" color="linkedInBlue" />
              <HeaderIcon type="Reddit" color="redditOrange" />
              <HeaderIcon type="Twitter" color="twitterBlue" />
              <Tooltip
                title="Copy link"
                placement="top"
                arrow
                PopperProps={{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -5.18], // creates -5.18px of space between popper and reference element
                      },
                    },
                  ],
                }}
              >
                {/* Mui link icon is horizontal, -45 deg rotate because I think it looks a bit nicer diagonal */}
                <LinkIcon
                  onClick={handleClick}
                  sx={{
                    color: 'text.blogIcons',
                    transform: 'rotate(-45deg)',
                    fontSize: '25px',
                    '&:hover': { color:  '#909090', cursor: 'pointer' },
                  }}
                />
              </Tooltip>
              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="top"
                //setting z index above the tooltip (toolTip is 1500)
                style={{ zIndex: 1501 }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ backgroundColor: 'background.dark' }}
                >
                  Link copied
                </Alert>
              </Popper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
