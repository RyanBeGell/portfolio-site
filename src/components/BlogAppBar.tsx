import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ColorModeContext } from '../../pages/_app';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import { useState } from 'react';


export interface Props{
  toggleColorMode : () => void;
}

export default function BlogAppBar(props:Props) {

  const {mode} = useContext(ColorModeContext);
  const theme = useTheme();

  const pages = ['Blog', 'Portfolio', 'Contact'];

  // For open/close of email subscribe modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
  }));

  return (<>

    <Box sx={{ flexGrow: 1}}>
      <AppBar position='fixed' sx={{backgroundColor:'background.blogNav',  backdropFilter:"blur(12px)",}}>
        <Toolbar>
        <Image 
          src="/favicon.png"
          alt="logo"
          width={32}
          height={32}
        />
          <Divider orientation='vertical' flexItem={true} sx={{ m:'16px'}}/>
          <Box sx={{flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <Button key={item} sx={{ color: 'text.primary' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Search  sx={{ mr:'5px', bgcolor:'background.dark', borderRadius:'10px',}}>
            <SearchIconWrapper>
              <SearchIcon color='primary'/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              size='small'
              sx={{ 
               '& .MuiInputBase-input': {
                padding: theme.spacing(1, 1, 1, 0),
                border: '1px solid',
                borderColor:'background.paperDivider',
                borderRadius:'10px',
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                  width: '12ch',
                  '&:focus': {
                    width: '20ch',
                    border:'1.5px solid',
                    borderColor:'primary.main',
                    borderRadius:'10px',
                  },
                },
              },}}
          />
          </Search>
          <IconButton
          color='primary'
          onClick={handleOpen}
          sx={{
            borderRadius:'10px',
            border:'1px solid',
            borderColor:'background.paperDivider',
             mx:'5px', 
             '&:hover': {
                borderColor:'primary.main',
              },}}
          >
            <MarkEmailUnreadOutlinedIcon />
        </IconButton>
        <IconButton
        color='primary'
        onClick={props.toggleColorMode}
          sx={{
            border:'1px solid',
            borderRadius:'10px', 
            borderColor:'background.paperDivider',
             mx:'5px', 
             '&:hover': {
                borderColor:'primary.main',
              },}}
        >
          {mode ==='light'?<DarkModeOutlinedIcon/>:<LightModeOutlinedIcon />}
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </>);
}