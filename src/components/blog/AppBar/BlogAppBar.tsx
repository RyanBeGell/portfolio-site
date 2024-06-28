import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
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
import StyledIconButton from './StyledIconButton/StyledIconButton';

export interface Props {
  toggleColorMode: () => void;
}

export default function BlogAppBar(props: Props) {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const pages = ['About me', 'Blog', 'Portfolio', 'Contact'];

  const router = useRouter();

  function handleRedirect(path: string) {
    if (path === 'About me' || path === 'home') router.push('/');
    else {
      router.push('/' + path.toLowerCase());
    }
  }

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
        }}
      />
      <AppBar
        elevation={0}
        sx={{
          boxShadow: `inset 0px -1px 1px ${theme.palette.divider}`,
          backgroundColor: 'background.blogNav',
          backdropFilter: 'blur(8px)',
          height: '56px',
        }}
      >
        <Container maxWidth="lg" sx={{ px: '30px !important' }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: '56px !important',
              justifyContent: { xs: 'space-between', sm: 'none' },
            }}
          >
            <Box
              sx={{
                display: 'flex' , // Change 'block' to 'flex'
                alignItems: 'center',
              }}
              className="hover-pointer grow-on-hover"
            >
              <Image
                onClick={() => handleRedirect('home')}
                src="/favicon.png"
                alt="logo"
                width={32}
                height={32}
              />
            </Box>
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
                    height:'34px',
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
                <StyledIconButton title="View site repository">
                  <GitHubIcon fontSize="small" />
                </StyledIconButton>
              </MUILink>
              {mode === 'light' ? (
                <StyledIconButton
                  title="Dark mode"
                  onClick={props.toggleColorMode}
                >
                  <DarkModeOutlinedIcon fontSize="small" />
                </StyledIconButton>
              ) : (
                <StyledIconButton
                  title="Light mode"
                  onClick={props.toggleColorMode}
                >
                  <LightModeOutlinedIcon fontSize="small" />
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
    </>
  );
}
