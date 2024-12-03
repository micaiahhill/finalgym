import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
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
    setError(""); // take away previous errors
    axios
      .get(
        `http://localhost:8080/api/members/classes/enrollment?classType=${classType}`
      )
      .then((response) => {
        setEnrollmentDetails(response.data);
      })
      .catch((error) => {
        setError("Error fetching enrollment details. Please try again.");
        console.error(error);
      });
  };

  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "80%" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Class Enrollment Details
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "#757575" }}
        >
          Enter a class type to view enrollment details.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 3,
            mb: 4,
          }}
        >
          <TextField
            label="Enter class name (e.g., Yoga)"
            variant="outlined"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            onClick={fetchEnrollmentDetails}
            sx={{
              backgroundColor: "#ff5722",
              ":hover": { backgroundColor: "#e64a19" },
            }}
            fullWidth
          >
            Fetch Enrollment
          </Button>
        </Box>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Enrollment Details for {classType}
        </Typography>
        {enrollmentDetails.length > 0 ? (
          <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Class Type</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Day</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Instructor</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Member</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
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
          <Typography variant="body1" color="textSecondary" sx={{ mt: 3 }}>
            No enrollment details found.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ClassEnrollment;