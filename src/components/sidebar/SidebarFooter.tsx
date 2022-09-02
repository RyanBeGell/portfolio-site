import { BottomNavigation, BottomNavigationAction, createTheme, Hidden, ThemeProvider} from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { Box, Grid, Divider, Typography } from "@mui/material";

const SidebarFooter = () => {

  const year: number = new Date().getFullYear();

  return (
    <>
          <Grid container alignItems="center" justifyContent="center" sx={{pt:"16px"}}>
            <Typography variant={"subtitle2"} color="text.subtitle">
              &copy; {year} Ryan BeGell
            </Typography>
          </Grid>
    </>
  );
};

export default SidebarFooter;