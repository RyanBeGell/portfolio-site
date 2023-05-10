import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MUILink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
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

  const router = useRouter();

  function handleRedirect(path: string) {
    if (path === 'Home') router.push('/');
    else {
      router.push('/' + path.toLowerCase());
    }
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
              <Image
                onClick={() => handleRedirect('Home')}
                src="/favicon.png"
                alt="logo"
                width={38}
                height={38}
                className="hover-pointer"
              />
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
              <Box>
                <MUILink
                  href="https://github.com/RyanBeGell/portfolio-site"
                  target="_blank"
                  rel="noopener"
                >
                  <StyledIconButton title="Github Repository">
                    <GitHubIcon />
                  </StyledIconButton>
                </MUILink>
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
