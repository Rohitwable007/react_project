import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Popover, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgb(24, 90, 157)',
  zIndex: theme.zIndex.drawer + 1,
}));

const Logo = styled('img')({
  height: 40,
  marginRight: 10,
  marginLeft: 30,
});

const Title = styled(Typography)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
});

function Header() {
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };

  const openUserMenu = Boolean(userMenuAnchor);
  const userMenuId = openUserMenu ? 'user-menu' : undefined;

  return (
    <HeaderAppBar position="fixed">
      <Toolbar>
        <Title variant="h6" component="div">
          <Logo src="assets/hlogo.jpg" />
          HMIS
        </Title>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={handleUserMenuOpen}>
          <AccountCircle />
        </IconButton>
        
        <Popover
          id={userMenuId}
          open={openUserMenu}
          anchorEl={userMenuAnchor}
          onClose={handleUserMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DarkModeIcon />
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
        </Popover>
      </Toolbar>
    </HeaderAppBar>
  );
}

export default Header;
