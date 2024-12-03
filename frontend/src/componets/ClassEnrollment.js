import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
} from "@mui/material";

function ClassEnrollment() {
  const [classType, setClassType] = useState("");
  const [enrollmentDetails, setEnrollmentDetails] = useState([]);
  const [error, setError] = useState("");

  const fetchEnrollmentDetails = () => {
    setError(""); // Clear previous errors
    axios
      .get(`http://localhost:8080/api/members/classes/enrollment?classType=${classType}`)
      .then((response) => {
        setEnrollmentDetails(response.data);
      })
      .catch((error) => {
        setError("Error fetching enrollment details. Please try again.");
        console.error(error);
      });
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
        Class Enrollment Details
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        mb={3}
      >
        <TextField
          label="Enter class name (e.g., Yoga)"
          variant="outlined"
          fullWidth
          value={classType}
          onChange={(e) => setClassType(e.target.value)}
          sx={{ maxWidth: "400px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={fetchEnrollmentDetails}
          sx={{
            backgroundColor: "#333",
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          Our Schedule
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ marginBottom: "1rem" }}>
          {error}
        </Alert>
      )}

      <Typography variant="h6" gutterBottom>
        Enrollment Details for: {classType}
      </Typography>
      {enrollmentDetails.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Class Type</b></TableCell>
                <TableCell><b>Location</b></TableCell>
                <TableCell><b>Time</b></TableCell>
                <TableCell><b>Day</b></TableCell>
                <TableCell><b>Instructor</b></TableCell>
                <TableCell><b>Member</b></TableCell>
                <TableCell><b>Email</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enrollmentDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell>{detail.CLASSTYPE}</TableCell>
                  <TableCell>{detail.LOCATION}</TableCell>
                  <TableCell>{detail.CLASSTIME}</TableCell>
                  <TableCell>{detail.CLASSDAY}</TableCell>
                  <TableCell>
                    {detail.INSTRUCTORFIRSTNAME} {detail.INSTRUCTORLASTNAME}
                  </TableCell>
                  <TableCell>
                    {detail.MEMBERFIRSTNAME} {detail.MEMBERLASTNAME}
                  </TableCell>
                  <TableCell>{detail.EMAIL}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No enrollment details found.</Typography>
      )}
    </Container>
  );
}

export default ClassEnrollment;
