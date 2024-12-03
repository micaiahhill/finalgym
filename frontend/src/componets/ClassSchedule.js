import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

function ClassSchedule() {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [day, setDay] = useState("");

  // Fetch all classes
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/members/classes")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  // Filter classes by day
  const handleDayChange = (selectedDay) => {
    setDay(selectedDay);
    setFilteredClasses(classes.filter((c) => c.classDay === selectedDay));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Class Schedule
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        sx={{ color: "#757575" }}
      >
        Find the perfect class for your schedule.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          mb: 4,
        }}
      >
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Select a Day</InputLabel>
          <Select
            value={day}
            onChange={(e) => handleDayChange(e.target.value)}
            label="Select a Day"
          >
            <MenuItem value="">All Days</MenuItem>
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
            <MenuItem value="Saturday">Saturday</MenuItem>
            <MenuItem value="Sunday">Sunday</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {day && (
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", color: "#333" }}
        >
          Classes on {day}
        </Typography>
      )}

      <Grid container spacing={3}>
        {filteredClasses.map((classData) => (
          <Grid item xs={12} sm={6} md={4} key={classData.classId}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {classData.classType}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {classData.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Time: {classData.classTime}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Instructor: {classData.instructorFirstName}{" "}
                  {classData.instructorLastName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredClasses.length === 0 && day && (
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#757575", mt: 3 }}
        >
          No classes scheduled for {day}.
        </Typography>
      )}
    </Container>
  );
}

export default ClassSchedule;
