import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import HeaderTitle from './components/HeaderTitle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import stylesComponents from './styles/stylesComponents'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles({
  boddy: stylesComponents.boddy,
  toolBar: stylesComponents.toolBar,
  listRoutes: stylesComponents.list,
  routeSelect: stylesComponents.routeSelect
});

const whiteColor = {color: '#fff'};


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
            <ListItem disablePadding style={whiteColor}>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <ShoppingCartIcon style={whiteColor}/>
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding style={whiteColor}>
              <ListItemButton component={Link} to="/company-profile">
                <ListItemIcon>
                  <AccountBoxIcon style={whiteColor}/>
                </ListItemIcon>
                <ListItemText primary="Company profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding style={whiteColor}>
              <ListItemButton component={Link} to="/sua-rota-aqui">
                <ListItemIcon>
                  <LogoutIcon style={whiteColor}/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
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

{/* <ListItemButton>
              <ListItemText primary="Products" className={classes.routeSelect}>
                <Link to="/"><Button size="large">Products</Button></Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Company profile" className={classes.routeSelect}>
                <Link to="company-profile"><Button size="large">Company profile</Button></Link>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Logout" className={classes.routeSelect}>
                <Link to="/"><Button size="large">Logout</Button></Link>
              </ListItemText>
            </ListItemButton> */}