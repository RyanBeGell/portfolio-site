import React from 'react';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';


export default function NavDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <Button>Home</Button>
        </ListItem>
        <ListItem>
          <Button>Blog</Button>
        </ListItem>
        <ListItem>
          <TextField label="Search" variant="outlined" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <React.Fragment key={'left'}>
        <DragHandleRoundedIcon onClick={toggleDrawer(true)} />
        <Drawer
          anchor={'left'}
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </>
  );
}