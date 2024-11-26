//Use this for adding new members.
//Include a form with fields for member details (e.g., name, email, phone).
//Make a POST request to your backend when the form is submitted.
// Have Attendance 

import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

function AddMember() {
  const schedule = {
    Monday: [
      { time: "7:00 AM - 8:00 AM", class: "Cycling" },
      { time: "9:00 AM - 10:00 AM", class: "Boxing" },
      { time: "12:00 PM - 1:00 PM", class: "Pilates" },
      { time: "6:00 PM - 7:00 PM", class: "Zumba" },
    ],
    Tuesday: [
      { time: "7:00 AM - 8:00 AM", class: "Pilates" },
      { time: "9:00 AM - 10:00 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Zumba" },
      { time: "6:00 PM - 7:00 PM", class: "Boxing" },
    ],
    Wednesday: [
      { time: "7:00 AM - 8:00 AM", class: "Boxing" },
      { time: "9:00 AM - 10:00 AM", class: "Pilates" },
      { time: "12:00 PM - 1:00 PM", class: "Cycling" },
      { time: "6:00 PM - 7:00 PM", class: "Zumba" },
    ],
    Thursday: [
      { time: "7:00 AM - 8:00 AM", class: "Zumba" },
      { time: "9:00 AM - 10:00 AM", class: "Cycling" },
      { time: "12:00 PM - 1:00 PM", class: "Boxing" },
      { time: "6:00 PM - 7:00 PM", class: "Pilates" },
    ],
    Friday: [
      { time: "7:00 AM - 8:00 AM", class: "Cycling" },
      { time: "9:00 AM - 10:00 AM", class: "Zumba" },
      { time: "12:00 PM - 1:00 PM", class: "Boxing" },
      { time: "6:00 PM - 7:00 PM", class: "Pilates" },
    ],
    Saturday: [
      { time: "8:00 AM - 9:00 AM", class: "Pilates" },
      { time: "10:00 AM - 11:00 AM", class: "Cycling" },
      { time: "1:00 PM - 2:00 PM", class: "Zumba" },
      { time: "4:00 PM - 5:00 PM", class: "Boxing" },
    ],
    Sunday: [
      { time: "8:00 AM - 9:00 AM", class: "Zumba" },
      { time: "10:00 AM - 11:00 AM", class: "Cycling" },
      { time: "1:00 PM - 2:00 PM", class: "Boxing" },
      { time: "4:00 PM - 5:00 PM", class: "Pilates" },
    ],
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gym Class Schedule
      </Typography>

      {/* Render the Schedule in a Grid */}
      <Grid container spacing={2}>
        {Object.keys(schedule).map((day) => (
          <Grid item xs={12} sm={6} md={4} key={day}>
            <Paper sx={{ padding: 2, backgroundColor: "#f4f4f4" }}>
              <Typography variant="h6">{day}</Typography>
              <Grid container direction="column" spacing={1}>
                {schedule[day].map((entry, index) => (
                  <Grid item key={index}>
                    <Typography variant="body1">
                      {entry.time} - {entry.class}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AddMember;