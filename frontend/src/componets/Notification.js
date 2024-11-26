import React from 'react';
import { Box, Typography } from '@mui/material';

function Notification({ notifications }) {
  return (
    <Box sx={{ ml: 3 }}>
      <Typography variant="h6" color="inherit">
        Notifications
      </Typography>
      {notifications.length === 0 ? (
        <Typography>No notifications available</Typography>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
      )}
    </Box>
  );
}

export default Notification;