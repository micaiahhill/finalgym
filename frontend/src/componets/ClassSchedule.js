import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
} from "@mui/material";

function ClassSchedule() {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [day, setDay] = useState("");

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

  
  const handleDayChange = (selectedDay) => {
    setDay(selectedDay);
    setFilteredClasses(classes.filter((c) => c.classDay === selectedDay));
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#f7f7f7",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Class Schedule
      </Typography>

      <Box mb={3}>
        <FormControl fullWidth>
          <InputLabel id="day-select-label">Select a day</InputLabel>
          <Select
            labelId="day-select-label"
            value={day}
            onChange={(e) => handleDayChange(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
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

      <Typography variant="h5" gutterBottom>
        {day ? `Classes on ${day}:` : "Select a day to view classes"}
      </Typography>
      {filteredClasses.length > 0 ? (
        filteredClasses.map((classData) => (
          <Card key={classData.classId} sx={{ marginBottom: "1rem" }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {classData.classType}
              </Typography>
              <Typography>
                <strong>Location:</strong> {classData.location}
              </Typography>
              <Typography>
                <strong>Time:</strong> {classData.classTime}
              </Typography>
              <Typography>
                <strong>Instructor:</strong> {classData.instructorFirstName}{" "}
                {classData.instructorLastName}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No classes available for the selected day.</Typography>
      )}
    </Container>
  );
}

export default ClassSchedule;
