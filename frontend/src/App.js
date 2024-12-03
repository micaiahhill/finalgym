import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import QueryExecutor from "./componets/QueryExecutor.js";
import UpdateMember from "./componets/UpdateMember.js";
import AddMember from "./componets/AddMembers.js";
import ClassSchedule from "./componets/ClassSchedule.js";
import ClassEnrollment from "./componets/ClassEnrollment.js";
import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null);

  // Fetch members from the backend
  const fetchMembers = () => {
    axios
      .get("http://localhost:8080/api/members")
      .then((response) => {
        console.log("Fetched members:", response.data); // Debugging output
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  };

  // Handle selecting a member for updating
  const handleSelectMember = (id) => {
    setSelectedMemberId(id);
  };

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#333" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Gym Connect
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Members
            </Button>
            <Button color="inherit" component={Link} to="/add-member">
              Add Member
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ marginTop: "2rem" }}>
          <Routes>
            {/* Default Route: Display Members */}
            <Route
              path="/"
              element={
                <Box>
                  <Button
                    variant="contained"
                    onClick={fetchMembers}
                    sx={{
                      backgroundColor: "#333",
                      "&:hover": {
                        backgroundColor: "#555",
                      },
                      marginBottom: "1rem",
                    }}
                  >
                    Our Members
                  </Button>
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      Members:
                    </Typography>
                    {members.map((member) => (
                      <Box
                        key={member.memberId}
                        sx={{
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          padding: "1rem",
                          marginBottom: "1rem",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <Typography>
                          <strong>Name:</strong> {member.firstName}{" "}
                          {member.lastName}
                        </Typography>
                        <Typography>
                          <strong>Email:</strong> {member.email}
                        </Typography>
                        <Typography>
                          <strong>Membership Type:</strong>{" "}
                          {member.membershipType}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={() => handleSelectMember(member.memberId)}
                          sx={{
                            backgroundColor: "#555",
                            "&:hover": {
                              backgroundColor: "#777",
                            },
                            marginTop: "0.5rem",
                          }}
                        >
                          Update
                        </Button>
                      </Box>
                    ))}
                  </Box>
                  {selectedMemberId && (
                    <Box>
                      <UpdateMember
                        memberId={selectedMemberId}
                        fetchMembers={fetchMembers}
                      />
                      <Button
                        variant="outlined"
                        onClick={() => setSelectedMemberId(null)}
                        sx={{
                          marginTop: "1rem",
                          color: "#333",
                          borderColor: "#333",
                          "&:hover": {
                            backgroundColor: "#f5f5f5",
                          },
                        }}
                      >
                        Cancel
                      </Button>
                    </Box>
                  )}
                  <ClassEnrollment />
                  <ClassSchedule />
                  <QueryExecutor />
                </Box>
              }
            />

            {/* Add Member Route */}
            <Route
              path="/add-member"
              element={<AddMember fetchMembers={fetchMembers} />}
            />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
