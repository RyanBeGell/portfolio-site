import {
  scrollToAbout,
  scrollToBlog,
  scrollToContact,
  scrollToHome,
  scrollToProjects,
  scrollToSkills,
} from '@/src/scrollers';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { ColorModeContext } from '../../../pages/_app';
import styles from './sidebar.module.css';
import SidebarFooter from './SidebarFooter';

export interface Props {
  toggleColorMode: () => void;
}

const drawerWidth = 282;

export default function Sidebar(props: Props) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { mode } = useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const drawer = (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar className={styles.avatar} src={'/avatar.svg'} alt="Avatar" />
      </Box>
      <Typography variant={'h5'} className={styles.name} color="#FFFFFF">
        Ryan BeGell
      </Typography>
      {/* <Typography variant={"subtitle2"} className={styles.workAvailability} color="text.subtitle">
            Available for work 
          </Typography> */}
      {mode === 'light' ? (
        <Divider sx={{ borderColor: 'rgba(255,255,255, 0.3)' }} />
      ) : (
        <Divider />
      )}
      <List>
        {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map(
          (text, index) => (
            <ListItem
              key={text}
              sx={{ px: '0px', py: '4px' }}
              color="primary.main"
            >
              <ListItemButton
                sx={{
                  borderRadius: 3,
                  '&:hover': { color: 'primary.main', bgColor: 'primary.main' },
                  alignItems: 'center',
                }}
                className={styles.navItem}
                onClick=
                { 
                  index === 0? scrollToHome:
                  index === 1? scrollToAbout:
                  index === 2? scrollToSkills:
                  index === 3? scrollToProjects:
                  index === 4? scrollToBlog:
                  index === 5? scrollToContact:undefined
                }
              >
                <ListItemIcon sx={{color:'#ffffff',}}>
                  {
                    index === 0? <HomeOutlinedIcon />:
                    index === 1? <PersonOutlineOutlinedIcon />:
                    index === 2? <FormatListBulletedOutlinedIcon />:
                    index === 3? <IntegrationInstructionsOutlinedIcon />:
                    index === 4? <HistoryEduOutlinedIcon />:
                    index === 5? <ContactMailOutlinedIcon/>:null
                  }
                </ListItemIcon>
                {index === 4 ? (
                  //conditionally render the underline based on where the user is on the page - only highlighting blog temporarily
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                    sx={{ ml: '-16px', color: '#FFFFFF' }}
                  />
                ) : (
                  <ListItemText
                    primary={text}
                    sx={{ ml: '-16px', color: '#FFFFFF' }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <>
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }} // Better open performance on mobile.
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              p: '16px',
              border: 0,
              backgroundColor: 'background.nav',
            },
          }}
        >
          {drawer}
          {mode === 'light' ? (
            <Divider sx={{ background: 'rgba(255,255,255, 0.3)' }} />
          ) : (
            <Divider />
          )}
          <List sx={{ bgcolor: 'background.nav' }}>
            <ListItem sx={{ color: '#ffffff' }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <DarkModeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" sx={{ ml: '-16px' }} />
              <Switch
                edge="end"
                onClick={() => {
                  props.toggleColorMode();
                }}
                checked={mode === 'dark'}
              />
            </ListItem>
          </List>
          <List sx={{ marginTop: `auto`, mb: 0, p: 0 }}>
            {mode === 'light' ? (
              <Divider sx={{ background: 'rgba(255,255,255, 0.3)' }} />
            ) : (
              <Divider />
            )}
            <ListItem sx={{ m: 0, p: 0 }}>
              <SidebarFooter />
            </ListItem>
          </List>
        </Drawer>

        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              p: '16px',
              border: 0,
              backgroundColor: 'background.nav',
            },
          }}
          open
        >
          {drawer}
          {mode === 'light' ? (
            <Divider sx={{ borderColor: 'rgba(255,255,255, 0.3)' }} />
          ) : (
            <Divider />
          )}
          <List sx={{ bgcolor: 'background.nav' }}>
            <ListItem sx={{ color: '#ffffff' }}>
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <DarkModeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" sx={{ ml: '-16px' }} />
              <Switch
                edge="end"
                onClick={() => {
                  props.toggleColorMode();
                }}
                checked={mode === 'dark'}
              />
            </ListItem>
          </List>
          <List sx={{ marginTop: `auto`, mb: 0, p: 0 }}>
            {mode === 'light' ? (
              <Divider sx={{ borderColor: 'rgba(255,255,255, 0.3)' }} />
            ) : (
              <Divider />
            )}
            <ListItem sx={{ m: 0, p: 0 }}>
              <SidebarFooter />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
