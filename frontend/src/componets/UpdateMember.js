import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

function UpdateMember({ memberId, fetchMembers }) {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    membershipType: "",
  });

  const handleInputChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/members/${memberId}`,
        member
      );
      alert("Member updated successfully!");
      fetchMembers(); // changing members lists
    } catch (error) {
      console.error("Error updating member:", error);
      alert("Failed to update member! Please try again.");
    }
  };

  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "80%", boxShadow: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Update Member
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: "#757575" }}
          >
            Modify the details of an existing member.
          </Typography>
          <Box
            component="form"
            onSubmit={handleUpdate}
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
              value={member.firstName}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={member.lastName}
              onChange={handleInputChange}
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              value={member.email}
              onChange={handleInputChange}
              variant="outlined"
              required
              type="email"
              fullWidth
            />
            <TextField
              label="Membership Type"
              name="membershipType"
              value={member.membershipType}
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
              Update Member
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UpdateMember;