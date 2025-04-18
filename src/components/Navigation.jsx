import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // ✅ Add this
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wishlistCount = useSelector((state) => state.wishlist.length);
  const username = useSelector((state) => state.user.name); // or .username


  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" onClick={() => setOpen(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              onClick={() => handleNavigation('/')}
              sx={{ cursor: 'pointer' }}
            >
              Auto Listing
            </Typography>
          </div>

          <div>
            <IconButton color="inherit" onClick={() => navigate('/wishlist')}>
              <Badge badgeContent={wishlistCount} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <Tooltip title={username || 'Profile'}>
              <IconButton color="inherit" onClick={() => navigate('/profile')}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => handleNavigation('/')}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/wishlist')}>
            <ListItemText primary="Wishlist" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation('/profile')}>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
