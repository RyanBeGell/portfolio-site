import CodeIcon from '@mui/icons-material/Code';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DragHandleRounded from '@mui/icons-material/DragHandleRounded';
import EmailIcon from '@mui/icons-material/Email';
import FolderSpecialOutlinedIcon from '@mui/icons-material/FolderSpecialOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { Avatar, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
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
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { scroller } from 'react-scroll';
import { ColorModeContext } from '../../../../pages/_app';
import StyledIconButton from '../../blog/AppBar/StyledIconButton/StyledIconButton';
import SidebarFooter from './Footer/SidebarFooter';
import styles from './Sidebar.module.css';
import CodePenIcon from '../../Icons/CodePenIcon';

export interface Props {
  toggleColorMode: () => void;
}

const drawerWidth = 282;

export default function Sidebar(props: Props) {
  const theme = useTheme();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { mode } = useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBlogButtonClick = () => {
    router.push('/blog/home');
  };

  const handleNavigationClick = (text: string) => {
    // close nav drawer before scrolling when on mobile
    if (mobileOpen) {
      setMobileOpen(false);
    }
    scroller.scrollTo(text.toLowerCase(), {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: mobileOpen ? -56 : 0,
    });
  };

  //sidebar social icons
  const SocialIconButton = ({ Icon }: { Icon: React.ElementType }) => {
    const isDarkMode = theme.palette.mode === 'dark';
    const backgroundColor = isDarkMode ? theme.palette.primary.main : '#FFFFFF';
    const color = isDarkMode
      ? theme.palette.getContrastText(backgroundColor)
      : theme.palette.primary.main;
    const hoverBackgroundColor = isDarkMode
      ? 'transparent'
      : 'rgba(0, 0, 0, 0.7)';

    return (
      <IconButton
        sx={{
          color,
          backgroundColor,
          ':hover': {
            backgroundColor: hoverBackgroundColor,
            color: isDarkMode ? theme.palette.primary.main : 'primary.main',
            boxShadow: isDarkMode
              ? `inset 0 0 0 1px ${theme.palette.primary.main}`
              : '',
          },
        }}
      >
        <Icon />
      </IconButton>
    );
  };

  const drawer = (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2, mt: 2 }}
      >
        <Avatar id={styles.avatar} src={'/avatar.svg'} alt="Avatar" />
      </Box>
      <Typography variant={'h5'} id={styles.name} color="#FFFFFF">
        Ryan BeGell
      </Typography>
      <Typography
        variant={'subtitle2'}
        sx={{ textAlign: 'center', mb: 2 }}
        color="text.navFooter"
      >
        Software Developer
      </Typography>
      <Grid
        container
        spacing={1.5}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center', // Add this line
          mb: 3,
        }}
      >
        <Grid item>
          <SocialIconButton Icon={GitHubIcon} />
        </Grid>
        <Grid item>
          <SocialIconButton Icon={LinkedInIcon} />
        </Grid>
        <Grid item>
          <SocialIconButton Icon={CodePenIcon} />
        </Grid>
        <Grid item>
          <SocialIconButton Icon={EmailIcon} />
        </Grid>
      </Grid>
      {mode === 'light' ? (
        <Divider sx={{ borderColor: 'rgba(255,255,255, 0.3)' }} />
      ) : (
        <Divider />
      )}
      <List>
        {[
          'Home',
          'About',
          'Skills',
          'Certifications',
          'Projects',
          'Blog',
          'Contact',
        ].map((text, index) => (
          <ListItem key={text} sx={{ p: 0 }}>
            <ListItemButton
              sx={{
                borderRadius: '4px',
                color: 'primary.main',
                my: '2px',
                py: '6px',
              }}
              onClick={() => handleNavigationClick(text)}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                {index === 0 ? (
                  <HomeOutlinedIcon />
                ) : index === 1 ? (
                  <PersonOutlineOutlinedIcon />
                ) : index === 2 ? (
                  <CodeIcon />
                ) : index === 3 ? (
                  <WorkspacePremiumIcon />
                ) : index === 4 ? (
                  <FolderSpecialOutlinedIcon />
                ) : index === 5 ? (
                  <HistoryEduOutlinedIcon />
                ) : index === 6 ? (
                  <ContactMailOutlinedIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ ml: '-16px', color: '#FFFFFF' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '56px',
          backgroundColor: 'background.paper',
          display: { sm: 'block', lg: 'none' },
        }}
      />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: '56px',
          display: { sm: 'block', lg: 'none' },
          backgroundColor: 'background.blogNav',
          backdropFilter: 'blur(8px)',
          boxShadow: `inset 0px -1px 1px ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ minHeight: '56px !important' }}>
          <Image
            src="/favicon.png"
            alt="logo"
            width={32}
            height={32}
            className="hover-pointer"
            onClick={() => handleNavigationClick('home')}
          />
          <Box sx={{ flexGrow: 1 }} />
          <StyledIconButton onClick={handleDrawerToggle}>
            <DragHandleRounded fontSize="small" />
          </StyledIconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          disableRestoreFocus={true}
          ModalProps={{
            keepMounted: true,
          }} // Better open performance on mobile.
          sx={{
            display: { sm: 'block', lg: 'none' },
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
            <ListItem sx={{ m: 0, p: 0 }}>
              <SidebarFooter />
            </ListItem>
          </List>
        </Drawer>

        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            display: { xs: 'none', lg: 'block' },
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
            <ListItem sx={{ m: 0, p: 0 }}>
              <SidebarFooter />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
