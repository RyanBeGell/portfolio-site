import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import styles from './sidebar.module.css';
import { Avatar, PaletteMode } from '@mui/material';
import SidebarFooter from './SidebarFooter';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListSubheader from '@mui/material/ListSubheader';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { scrollToHome, scrollToAbout, scrollToBlog, scrollToContact, scrollToProjects, scrollToSkills } from '@/src/scrollers';
import { ColorModeContext } from '../../../pages/_app';
import { useContext } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface Props{
  toggleColorMode : () => void;
}

const drawerWidth = 282;

export default function Sidebar(props: Props){

  const router = useRouter()

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {mode} = useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /*
    Simple function to create a delay in milliseconds,
    used to delay scrolling after a redirect
  */
  function sleep (ms:number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /*
    Handle click methods for sideNav buttons.
    Scrolls to section using ReactScroll if already on "/" route,
    otherwise redirects to main page, delays for 300ms, and scrolls to section.
  */
  const handleHomeButtonClick = () => {
    if (router.pathname !== "/") {
      router.push('/');
    } else {
        scrollToHome();
       }
    }
    
  const handleAboutButtonClick = () => {
    if (router.pathname !== "/") {
      router.push('/');
      sleep(300).then(() => {
        scrollToAbout();
      });
    } else {
        scrollToAbout();
       }
    }

  const handleSkillsButtonClick = () => {
    if (router.pathname !== "/") {
      router.push('/');
      sleep(300).then(() => {
        scrollToSkills();
      });
    } else {
        scrollToSkills();
      }
    }    

  const handleProjectsButtonClick = () => {
    if (router.pathname !== "/") {
      router.push('/');
      sleep(300).then(() => {
        scrollToProjects();
      });
    } else {
        scrollToProjects();
      }
    }  

  const handleBlogButtonClick = () => {
    if (router.pathname !== "/") {
      router.push('/');
      sleep(300).then(() => {
        scrollToBlog();
      });
    } else {
        scrollToBlog();
      }
    }
  const handleContactButtonClick = () => {
    if (router.pathname !== "/") {
      router.push('/');
      sleep(300).then(() => {
        scrollToContact();
      });
    } else {
        scrollToContact();
      }
    }    
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
      {/* <Typography variant={"subtitle2"} className={styles.workAvailability} color="text.subtitle">
            Available for work 
          </Typography> */}
      {mode==='light'?<Divider sx={{background:'rgba(255,255,255, 0.3)'}}/>:<Divider/>}
      <List>
        {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((text, index) => (
          <ListItem key={text} sx={{px:"0px", py:"4px",}} color='primary.main'>
            <ListItemButton 
              sx={{ borderRadius: 3,"&:hover": {color:'primary.main',bgColor:'primary.main',}, alignItems:'center' }}
              className={styles.navItem} 
              onClick=
              { 
                index === 0? handleHomeButtonClick:
                index === 1? handleAboutButtonClick:
                index === 2? handleSkillsButtonClick:
                index === 3? handleProjectsButtonClick:
                index === 4? handleBlogButtonClick:
                index === 5? handleContactButtonClick:undefined
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
              {index===4? 
              //conditionally render the underline based on where the user is on the page - only highlighting blog temporarily
              <ListItemText primary={text} primaryTypographyProps={{fontWeight: 'bold'}} sx={{ml:"-16px", color:"#FFFFFF"}} />:
              <ListItemText primary={text}  sx={{ml:"-16px", color:"#FFFFFF"}}/>}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (<>
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
      aria-label="navigation"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,}} // Better open performance on mobile.
          sx={{
              display: { xs: 'block', sm: 'none',},
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: drawerWidth,  
                p:"16px", border: 0, 
                backgroundColor:'background.nav',},
            }}
      >
        {drawer}
        {mode==='light'?<Divider sx={{background:'rgba(255,255,255, 0.3)'}}/>:<Divider/>}
        <List
          sx={{bgcolor: 'background.nav'}}
        >
          <ListItem sx={{color:'#ffffff'}}>
            <ListItemIcon sx={{color:'#ffffff'}}>
              <DarkModeOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Dark Mode" sx={{ml:"-16px"}} />
            <Switch
              edge="end"
              onClick={() => {props.toggleColorMode();}}
              checked={mode==='dark'}
            />
          </ListItem>
          </List>
          <List sx={{ marginTop: `auto`, mb:0, p:0, }} >
            {mode==='light'?<Divider sx={{background:'rgba(255,255,255, 0.3)'}}/>:<Divider/>}
            <ListItem sx={{m:0, p:0}}>
              <SidebarFooter/>
            </ListItem>
          </List>
        </Drawer>
        
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  p:"16px", border: 0, backgroundColor:'background.nav',},
          }}
          open
        >
          {drawer}
          {mode==='light'?<Divider sx={{background:'rgba(255,255,255, 0.3)'}}/>:<Divider/>}
          <List
            sx={{bgcolor: 'background.nav'}}
          >
          <ListItem sx={{color:'#ffffff'}}>
            <ListItemIcon sx={{color:'#ffffff'}}>
              <DarkModeOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary="Dark Mode" sx={{ml:"-16px"}} />
            <Switch
              edge="end"
              onClick={() => {props.toggleColorMode();}}
              checked={mode==='dark'}
            />
          </ListItem>
          </List>
          <List sx={{ marginTop: `auto`, mb:0, p:0, }} >
          {mode==='light'?<Divider sx={{background:'rgba(255,255,255, 0.3)'}}/>:<Divider/>}
            <ListItem sx={{m:0, p:0}}>
              <SidebarFooter/>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>);
}

