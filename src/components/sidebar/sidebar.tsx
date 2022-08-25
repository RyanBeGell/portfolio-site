import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import styles from './sidebar.module.css';
import { Avatar } from '@mui/material';
import SidebarFooter from './SidebarFooter';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';


const drawerWidth = 282;

export default function Sidebar(){
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
        <Avatar className={styles.avatar} src={"/avatar.svg"} alt="Avatar"/>
      </Box>
      <Typography variant={"h5"} className={styles.name} color="#FFFFFF">
        Ryan BeGell
      </Typography>
      <Divider />
      <List>
        {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((text, index) => (
          <ListItem key={text} sx={{px:"12px", py:"4px",}} className={styles.navItem}>
            <ListItemButton sx={{ borderRadius: 2,}}>
              <ListItemIcon sx={{color:'#ffffff'}}>
                {
                  index === 0? <HomeIcon /> :
                  index === 1? <PersonIcon />:
                  index === 2? <EqualizerIcon />:
                  index === 3? <IntegrationInstructionsRoundedIcon />:
                  index === 4? <HistoryEduIcon />:
                  index === 5? <ContactMailRoundedIcon/>:null
                }
              </ListItemIcon>
              {index===4? 
              //conditionally render the underline based on where the user is on the page - only highlighting blog temporarily
              <ListItemText primary={text} sx={{ml:"-12px", color:"#FFFFFF", }} className={styles.underlineNavItem}/>:
              <ListItemText primary={text} sx={{ml:"-12px", color:"#FFFFFF", }}/>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ m: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },}}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  p:"16px", border: 0, },
          }}
        >
          {drawer}
          <SidebarFooter/>
        </Drawer>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  p:"16px", border: 0, backgroundColor:'background.nav'},
          }}
          open
        >
          {drawer}
          <SidebarFooter/>
        </Drawer>
      </Box>
    </Box>
  );
}

