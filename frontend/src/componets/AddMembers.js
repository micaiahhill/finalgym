import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function AddMember({ fetchMembers }) {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    membershipType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/members", newMember);
      alert("Member added successfully!");
      fetchMembers();
      setNewMember({
        firstName: "",
        lastName: "",
        email: "",
        membershipType: "",
      });
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to add member! Please try again.");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        padding: "2rem",
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
        Join Gym Connect 
      </Typography>
      <form onSubmit={handleAdd}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={newMember.firstName}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={newMember.lastName}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Email Address"
            type="email"
            name="email"
            value={newMember.email}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="membership-type-label">Membership Type</InputLabel>
            <Select
              labelId="membership-type-label"
              name="membershipType"
              value={newMember.membershipType}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="Bronze">Bronze</MenuItem>
              <MenuItem value="Silver">Silver</MenuItem>
              <MenuItem value="Gold">Gold</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#333",
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            Add Member
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default AddMember;
