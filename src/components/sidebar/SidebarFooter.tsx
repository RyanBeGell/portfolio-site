import { BottomNavigation, BottomNavigationAction, createTheme, ThemeProvider} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import styles from './sidebar.module.css';

const SidebarFooter = () => {

  //Main theme needs to be overridden to have a different MUI paper
  const theme = createTheme({
    palette: {
      background: {
        default: '#0A1929',
        paper: '#0A1929',
      },
        text: {
            secondary: 'rgba(255, 255, 255, 0.7)',
        }
  }
  });


  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, width: 280}} elevation={3}>
        <BottomNavigation>
          <BottomNavigationAction icon={<LinkedIn color="primary" className={styles.footerIcon}/>}/>
          <BottomNavigationAction icon={<GitHub color="primary" className={styles.footerIcon}/>}/>
          <BottomNavigationAction icon={<Email color="primary" className={styles.footerIcon}/>}/>
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};

export default SidebarFooter;