import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
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

  const pages = ['Home', 'Blog', 'Portfolio',];

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
        elevation={0}
          sx={{
            borderBottom: `1px solid ${theme.palette.divider}`,
            // change background color to transparent after scrolling 48px
            // backgroundColor: `${
            //   scrollPosition.scrollY > 48
            //     ? 'background.blogNav'
            //     : 'background.paper'
            // }`,
            backgroundColor:'background.blogNav',
            backdropFilter: 'blur(8px)',
            height: '56px',
          }}
        >
          <Container maxWidth="lg" sx={{px:'30px !important'}}>
            <Toolbar
            disableGutters
              sx={{
                minHeight: '56px !important',
                justifyContent: { xs: 'space-between', sm: 'none' },
              }}
            >
              <Image
                onClick={() => handleRedirect('Home')}
                src="/favicon.png"
                alt="logo"
                width={32}
                height={32}
                className="hover-pointer"
              />
              <Box
                sx={{
                  ml: '20px',
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {pages.map((item) => (
                  <Button
                    onClick={() => handleRedirect(item)}
                    key={item}
                    sx={{
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      textTransform: 'none',
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              <Box display="flex">
                <MUILink
                  href="https://github.com/RyanBeGell/portfolio-site"
                  target="_blank"
                  rel="noopener"
                >
                  <StyledIconButton title="Browse my code on GitHub">
                    <GitHubIcon fontSize='small'/>
                  </StyledIconButton>
                </MUILink>
                <StyledIconButton title="Send me an email">
                  <EmailIcon fontSize='small'/>
                </StyledIconButton>

                {mode === 'light' ? (
                  <StyledIconButton
                    title="Dark mode"
                    onClick={props.toggleColorMode}
                  >
                    <DarkModeOutlinedIcon fontSize='small'/>
                  </StyledIconButton>
                ) : (
                  <StyledIconButton
                    title="Light mode"
                    onClick={props.toggleColorMode}
                  >
                    <LightModeOutlinedIcon fontSize='small'/>
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
