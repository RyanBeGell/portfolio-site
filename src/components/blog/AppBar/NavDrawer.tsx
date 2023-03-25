import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, ListItemButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import React from 'react';

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
        variant="temporary"
        disableRestoreFocus={true}
        ModalProps={{
          keepMounted: true,
        }} // Better open performance on mobile.
        anchor="top"
        open={open}
        onClose={handleDrawerClose}
        sx={{ height: 'auto' }}
      >
        <List>
          <ListItemButton>Blog</ListItemButton>
          <ListItemButton>Portfolio</ListItemButton>
        </List>
      </Drawer>
    </>
  );
}