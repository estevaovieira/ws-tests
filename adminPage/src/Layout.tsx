import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import HeaderTitle from './components/HeaderTitle';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

const drawerWidth = 240;


const Layout = () => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <HeaderTitle />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton>
              <Button variant="text" color="primary" component={Link} to="/">
                Products
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button variant="text" color="primary" component={Link} to="company-profile">
                Company Profile
              </Button>
            </ListItemButton>
            <ListItemButton>
              <Button variant="text" color="primary" component={Link} to="company-profile">
                Logout
              </Button>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <Outlet />
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout