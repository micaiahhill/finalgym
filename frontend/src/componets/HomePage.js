import React from "react";
import { Box, Typography, Button, Grid, Paper, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Homepage({ notifications }) {
  return (
    <div>
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Gym Connect
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your ultimate solution for gym management
        </Typography>

        {/* Quick Links */}
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/AddMember"
            sx={{ margin: 1 }}
          >
            Add Member
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/ClassManagement"
            sx={{ margin: 1 }}
          >
            Manage Classes
          </Button>
          <Button
            variant="contained"
            color="success"
            component={Link}
            to="/Notifications"
            sx={{ margin: 1 }}
            startIcon={<NotificationsIcon />}
          >
            ({notifications.length})
          </Button>
        </Box>
      </Box>

      {/* Gym Overview Section */}
      <Box sx={{ marginTop: 5, padding: 2, backgroundColor: "#f7f7f7", borderRadius: "8px" }}>
        <Typography variant="h5" gutterBottom>
          Gym Overview
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Members</Typography>
              <Typography>120 Active Members</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Classes</Typography>
              <Typography>15 Weekly Classes</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} sx={{ padding: 2, display: "flex", alignItems: "center" }}>
              <NotificationsIcon sx={{ mr: 1 }} />
              <Typography variant="h6">{notifications.length} Unread</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Homepage;