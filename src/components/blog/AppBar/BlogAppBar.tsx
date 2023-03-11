import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import StyledIconButton from './StyledIconButton/StyledIconButton';

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
  const router = useRouter();

  function handleRedirect(path: string) {
    if (path === 'Portfolio') router.push('/');
    else if (path === 'Blog') router.push('/blog/home');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            // change background color to transparent after scrolling 48px
            backgroundColor: `${
              scrollPosition.scrollY > 48
                ? 'background.blogNav'
                : 'background.paper'
            }`,
            backdropFilter: 'blur(8px)',
          }}
        >
          <Container maxWidth="xl" sx={{ px: '20px' }}>
            <Toolbar
              sx={{ justifyContent: { xs: 'space-between', sm: 'none' }, p: 0 }}
            >
              <Link href="/" className="pointer-hover">
                <Image src="/favicon.png" alt="logo" width={38} height={38}  className="hover-pointer"/>
              </Link>
              <Divider
                orientation="vertical"
                flexItem={true}
                sx={{ m: '16px', display: { xs: 'none', sm: 'block' } }}
              />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                {pages.map((item) => (
                  <Button
                    onClick={() => handleRedirect(item)}
                    key={item}
                    size="large"
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
                  bgcolor: 'background.default',
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
                          border: '2px solid',
                          borderColor: 'primary.main',
                          borderRadius: '10px',
                        },
                      },
                    },
                  }}
                />
              </Search>
              <Box>
                <StyledIconButton title="Subscribe to email notifications">
                  <MarkEmailUnreadOutlinedIcon />
                </StyledIconButton>
                {mode === 'light' ? (
                  <StyledIconButton
                    title="Dark mode"
                    onClick={props.toggleColorMode}
                  >
                    <DarkModeOutlinedIcon fontSize="medium" />
                  </StyledIconButton>
                ) : (
                  <StyledIconButton
                    title="Light mode"
                    onClick={props.toggleColorMode}
                  >
                    <LightModeOutlinedIcon />
                  </StyledIconButton>
                )}
                <IconButton
                  color="primary"
                  sx={{
                    display: { sx: 'flex', sm: 'none' },
                    border: '1px solid',
                    borderRadius: '10px',
                    borderColor: 'background.paperDivider',
                    mx: '5px',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <DragHandleRoundedIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
