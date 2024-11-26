import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header({ unreadCount }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none' }}
          >
            Gym Connect
          </Typography>
          <Button color="inherit" component={Link} to="/AddMember">
            Members
          </Button>
          <Button color="inherit" component={Link} to="/ClassManagement">
            Classes
          </Button>

          {/* Replace "Notifications" text with bell icon and badge */}
          <IconButton
            color="inherit"
            component={Link}
            to="/Notifications"
            aria-label="notifications"
          >
            <Badge badgeContent={unreadCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;