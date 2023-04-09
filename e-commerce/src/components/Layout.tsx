import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import PetsIcon from '@mui/icons-material/Pets';
import HardwareIcon from '@mui/icons-material/Hardware';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import DeckIcon from '@mui/icons-material/Deck';
import SpaIcon from '@mui/icons-material/Spa';
import Link from 'next/link';
import HeaderTitle from './HeaderTitle';
import styles from '../styles/layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function Layout({ children }: LayoutProps) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const itemButton = { minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 };
  const itemIcon = { minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' };
  const linkStyle = {textDecoration: 'none', color: '#000'};

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ marginRight: 5, ...(open && { display: 'none' }), }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <HeaderTitle />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <HealthAndSafetyIcon />
              </ListItemIcon>
              <ListItemText primary={'Healty & Care'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/food" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <FastfoodIcon />
              </ListItemIcon>
              <ListItemText primary={'Food'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/pet" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary={'Pet'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/hardware" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <HardwareIcon />
              </ListItemIcon>
              <ListItemText primary={'Hardware'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/flowers" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <LocalFloristIcon />
              </ListItemIcon>
              <ListItemText primary={'Flowers'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/gardens" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <DeckIcon />
              </ListItemIcon>
              <ListItemText primary={"Garden's"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <Link href="/beautyHair" style={linkStyle}><ListItemButton sx={itemButton}>
              <ListItemIcon sx={itemIcon}>
                <SpaIcon />
              </ListItemIcon>
              <ListItemText primary={'Beauty & Hair'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton></Link>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          {children}
          <p className={styles.footer}>My customer - all rights reserved - 2023</p>
        </Typography>
      </Box>
    </Box>
  )
}
