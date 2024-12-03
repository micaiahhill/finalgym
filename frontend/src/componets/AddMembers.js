import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
} from "@mui/material";

function AddMember({ fetchMembers }) {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    membershipType: "",
  });

  const handleInputChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/members", newMember);
      alert("Member added successfully!"); // Success message
      fetchMembers(); // Refresh the members list
      // Reset the form
      setNewMember({
        firstName: "",
        lastName: "",
        email: "",
        membershipType: "",
      });
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to add member! Please try again."); // Failure message
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Add New Member
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: "#757575" }}
          >
            Help us keep your gym membership records up-to-date.
          </Typography>
          <Box
            component="form"
            onSubmit={handleAdd}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 3,
            }}
          >
            <TextField
              label="First Name"
              name="firstName"
              value={newMember.firstName}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={newMember.lastName}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={newMember.email}
              onChange={handleInputChange}
              variant="outlined"
              required
              type="email"
              fullWidth
            />
            <TextField
              label="Membership Type"
              name="membershipType"
              value={newMember.membershipType}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#ff5722",
                ":hover": { backgroundColor: "#e64a19" },
              }}
              fullWidth
            >
              Add Member
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AddMember;