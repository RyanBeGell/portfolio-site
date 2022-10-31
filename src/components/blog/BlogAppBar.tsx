import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { ColorModeContext } from '../../../pages/_app';
import StyledIconButton from '../StyledIconButton';

export interface Props {
  toggleColorMode: () => void;
}

export default function BlogAppBar(props: Props) {
  const { mode } = useContext(ColorModeContext);
  const theme = useTheme();

  const pages = ['Blog', 'Portfolio'];

  // For open/close of email subscribe modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Scroll position state, used to determine if NavBar will be transparent
  const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 });

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    }

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
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

  const StyledInputBase = styled(InputBase)(({ theme }) => ({}));

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            // change background color to transparent after scrolling 48px
            backgroundColor: `${
              scrollPosition.scrollY > 48 ? 'transparent' : 'background.blogNav'
            }`,
            backdropFilter: 'blur(20px)',
          }}
        >
          <Toolbar>
            <IconButton
              color="primary"
              sx={{
                display: { sx: 'flex', sm: 'none' },
                border: '1px solid',
                borderRadius: '10px',
                borderColor: 'background.paperDivider',
                mr: '16px',
                '&:hover': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <DragHandleRoundedIcon />
            </IconButton>
            <Image src="/favicon.png" alt="logo" width={38} height={38} />
            <Divider
              orientation="vertical"
              flexItem={true}
              sx={{ m: '16px', display: { xs: 'none', sm: 'block' } }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              {pages.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Search
              sx={{
                mr: '5px',
                bgcolor: 'background.dark',
                borderRadius: '10px',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon color="primary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                size="small"
                sx={{
                  '& .MuiInputBase-input': {
                    padding: theme.spacing(1, 1, 1, 0),
                    border: '1px solid',
                    borderColor: 'background.paperDivider',
                    borderRadius: '10px',
                    '&:hover': {
                      border: '1px solid',
                      borderColor: 'primary.main',
                      borderRadius: '10px',
                    },
                    // vertical padding + font size from searchIcon
                    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                    transition: theme.transitions.create('width'),
                    width: '100%',
                    [theme.breakpoints.up('sm')]: {
                      width: '12ch',
                      '&:focus': {
                        width: '20ch',
                        border: '1px solid',
                        borderColor: 'primary.main',
                        borderRadius: '10px',
                      },
                    },
                  },
                }}
              />
            </Search>
            <StyledIconButton>
              <MarkEmailUnreadOutlinedIcon />
            </StyledIconButton>
            <StyledIconButton onClick={props.toggleColorMode}>
              {mode === 'light' ? (
                <DarkModeOutlinedIcon fontSize="medium" />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </StyledIconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
