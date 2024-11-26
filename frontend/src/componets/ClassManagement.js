import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Tabs,
  Tab,
  Snackbar,
  Alert,
  Badge,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";

// TabPanel Component for Tab Content Management
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function ClassManagement({ setNotifications }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [className, setClassName] = useState("");
  const [schedule, setSchedule] = useState("");
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [classes, setClasses] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0); // Track unread notifications
  
  // Available classes and their corresponding schedules
  const classOptions = [
    { name: "Cycling", schedules: ["Monday 7:00 AM - 8:00 AM", "Tuesday 9:00 AM - 10:00 AM", "Wednesday 12:00 PM - 1:00 PM", "Thursday 9:00 AM - 10:00 AM", "Friday 7:00 AM - 8:00 AM", "Saturday 10:00 AM - 11:00 AM" , "Sunday 10:00 AM - 11:00 AM"] },
    { name: "Pilates", schedules: ["Monday 12:00 PM - 1:00 PM", "Tuesday 7:00 AM - 8:00 AM", "Wednesday 9:00 AM - 10:00 AM", "Thursday 6:00 PM - 7:00 PM", "Friday 6:00 PM - 7:00 PM", "Saturday 8:00 AM - 9:00 AM" , "Sunday 4:00 PM - 5:00 PM"] },
    { name: "Boxing", schedules: ["Monday 9:00 AM - 10:00 AM", "Tuesday 6:00 PM - 7:00 PM", "Wednesday 7:00 AM - 8:00 AM", "Thursday 12:00 PM - 1:00 PM", "Friday 12:00 PM - 1:00 PM", "Saturday 4:00 PM - 5:00 PM" , "Sunday 1:00 PM - 2:00 PM"] },
    { name: "Zumba", schedules: ["Monday 6:00 PM - 7:00 PM", "Tuesday 12:00 PM - 1:00 PM", "Wednesday 6:00 PM - 7:00 PM", "Thursday 7:00 AM - 8:00 AM", "Friday 9:00 AM - 10:00 AM", "Saturday 1:00 PM - 2:00 PM" , "Sunday 8:00 AM - 9:00 AM"] },
  ];

  // Handle switching tabs
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);

    // Reset unread count if the notifications tab is selected
    if (newValue === 2) {
      setUnreadCount(0);
    }
  };

  // Handle class selection and update schedule options
  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setClassName(selectedClass);
    
    // Clear the selected schedule when class is changed
    setSchedule("");
  };

  // Handle schedule selection based on selected class
  const handleScheduleChange = (event) => {
    setSchedule(event.target.value);
  };

  // Add Class handler
  const handleAddClass = () => {
    // Check if className or schedule is empty
    if (className.trim() === "" || schedule.trim() === "") {
      setSnackbarSeverity("error");
      setSnackbarMessage("Error: Please fill in all class details.");
      setOpenSnackbar(true);
      setNotifications((prev) => [
        ...prev,
        "Error: Please fill in all class details.",
      ]);
      return;
    }

    // Add the new class to the classes list
    setClasses((prevClasses) => [
      ...prevClasses,
      { className, schedule },
    ]);

    // Success notification
    const successMessage = `Class "${className}" scheduled for ${schedule} added successfully!`;
    setNotifications((prev) => [...prev, successMessage]);
    setUnreadCount((prevCount) => prevCount + 1); // Increase unread notification count
    
    setSnackbarSeverity("success");
    setSnackbarMessage(successMessage);
    setOpenSnackbar(true);

    // Clear the input fields
    setClassName("");
    setSchedule("");
  };

  // Enroll Member handler
  const handleAddMember = () => {
    if (newMember.trim() === "") {
      setSnackbarSeverity("error");
      setSnackbarMessage("Error: Please provide a valid member name.");
      setOpenSnackbar(true);
      setNotifications((prev) => [
        ...prev,
        "Error: Please provide a valid member name.",
      ]);
      return;
    }

    // Prevent duplicate members
    if (members.includes(newMember)) {
      setSnackbarSeverity("error");
      setSnackbarMessage(`Error: Member "${newMember}" already exists.`);
      setOpenSnackbar(true);
      setNotifications((prev) => [
        ...prev,
        `Error: Member "${newMember}" already exists.`,
      ]);
      return;
    }

    // Add the new member
    setMembers((prev) => [...prev, newMember]);
    setNotifications((prev) => [
      ...prev,
      `Member "${newMember}" enrolled!`,
    ]);
    setUnreadCount((prevCount) => prevCount + 1); // Increase unread notification count

    setSnackbarSeverity("success");
    setSnackbarMessage(`Member "${newMember}" enrolled successfully!`);
    setOpenSnackbar(true);

    setNewMember("");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Class Management
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Class management tabs"
      >
        <Tab label="Add Classes" />
        <Tab label="Enroll Members" />
        <Tab
          label="View Schedule"
          icon={<Badge badgeContent={unreadCount} color="error" />}
        />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <Typography variant="h6" gutterBottom>
          Add a New Class
        </Typography>
        <Box sx={{ mb: 2 }}>
          {/* Class Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Class Name</InputLabel>
            <Select
              value={className}
              onChange={handleClassChange}
              label="Class Name"
            >
              {classOptions.map((option, index) => (
                <MenuItem key={index} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Schedule Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Schedule</InputLabel>
            <Select
              value={schedule}
              onChange={handleScheduleChange}
              label="Schedule"
              disabled={!className} // Disable schedule dropdown until a class is selected
            >
              {className &&
                classOptions
                  .find((option) => option.name === className)
                  .schedules.map((time, index) => (
                    <MenuItem key={index} value={time}>
                      {time}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" onClick={handleAddClass}>
          Add Class
        </Button>
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <Typography variant="h6" gutterBottom>
          View Schedule
        </Typography>
        {/* Displaying added classes in the View Schedule tab */}
        {classes.length === 0 ? (
          <Typography>No classes scheduled yet.</Typography>
        ) : (
          classes.map((cls, index) => (
            <Typography key={index}>
              {cls.className} - {cls.schedule}
            </Typography>
          ))
        )}
      </TabPanel>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ClassManagement;