import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import HeaderTitle from './components/HeaderTitle';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import stylesComponents from './styles/stylesComponents'

const useStyles = makeStyles({
  boddy: stylesComponents.boddy,
  toolBar: stylesComponents.toolBar,
  listRoutes: stylesComponents.list,
  routeSelect: stylesComponents.routeSelect
});


const Layout = () => {
  const classes = useStyles();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" noWrap component="div">
            <HeaderTitle />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: 'rgb(15, 1, 92)'}}}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List className={classes.listRoutes}>
            <ListItemButton>
              <Link to="/" className={classes.routeSelect}><ListItemText primary="Products" /></Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="company-profile" className={classes.routeSelect}><ListItemText primary="Company profile" /></Link>
            </ListItemButton>
            <ListItemButton>
              <Link to="/" className={classes.routeSelect}><ListItemText primary="Logout" /></Link>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className={classes.boddy}>
        <Toolbar />
        <Typography paragraph className={classes.boddy}>
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout