import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import { ListItemButton, ListItemIcon, ListItemText, InputBase   } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DragHandleRoundedIcon onClick={handleDrawerOpen} />
      <Drawer
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
        variant="persistent"
        sx={{ height: 'auto' }}
      >
        <List>
          <ListItemButton>Blog</ListItemButton>
          <ListItemButton>Portfolio</ListItemButton>
          <div>
            <SearchIcon />
            <InputBase placeholder="Search" />
          </div>
        </List>
      </Drawer>
    </>
  );
};
