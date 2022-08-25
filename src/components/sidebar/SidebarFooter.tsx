import { BottomNavigation, BottomNavigationAction, createTheme, ThemeProvider} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import styles from './sidebar.module.css';
import { Box, Grid, Divider, Typography } from "@mui/material";

const SidebarFooter = () => {

  const year: number = new Date().getFullYear();

  return (<>
  <Box sx={{ position: 'fixed', bottom: 0, left: 0, width: '282px',px:"16px"}} >
    <Divider />
      <Grid container alignItems="center" justifyContent="center" sx={{p:"16px"}}>
        <Divider />
        <Typography variant={"subtitle2"} color="text.subtitle">
          &copy; {year} Ryan BeGell
        </Typography>
      </Grid>
  </Box>
  </>);
};

export default SidebarFooter;