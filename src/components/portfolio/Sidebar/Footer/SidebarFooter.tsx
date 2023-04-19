import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography } from '@mui/material';
import MUILink from '@mui/material/Link';
import { useState } from 'react';

const SidebarFooter = () => {
  const year: number = new Date().getFullYear();

  //state to change color of only the GitHub icon when the link text is hovered
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <MUILink
        href="https://github.com/RyanBeGell/portfolio-site"
        target="_blank"
        rel="noopener"
        color="text.navFooter"
        underline="hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ display: 'flex', alignItems: 'center',}}
      >
        <GitHubIcon
          sx={{
            mr: '8px',
            fontSize: '20px',
            color: hovered ? '#FFFFFF' : 'inherit',
          }}
        />
        <Typography variant={'body2'} color="text.navFooter">
          GitHub repository
        </Typography>
      </MUILink>
      <Typography variant={'caption'} color="text.navFooter" sx={{ pt: '4px' }}>
        &copy; {year} Ryan BeGell
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
