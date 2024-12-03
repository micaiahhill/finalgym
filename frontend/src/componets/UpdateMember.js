import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function UpdateMember({ memberId, fetchMembers }) {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    membershipType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/members/${memberId}`,
        member
      );
      alert(response.data); // Show success/failure message
      fetchMembers(); // Refresh the members list
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
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
        Update Member
      </Typography>
      <form onSubmit={handleUpdate}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={member.firstName}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={member.lastName}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            value={member.email}
            onChange={handleInputChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="membership-type-label">Membership Type</InputLabel>
            <Select
              labelId="membership-type-label"
              name="membershipType"
              value={member.membershipType}
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
            sx={{
              backgroundColor: "#333",
              "&:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            Update Member
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default UpdateMember;
