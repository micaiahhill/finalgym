import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import axios from "axios";
import QueryExecutor from "./componets/QueryExecutor";
import UpdateMember from "./componets/UpdateMember";
import AddMember from "./componets/AddMembers";
import ClassSchedule from "./componets/ClassSchedule";
import ClassEnrollment from "./componets/ClassEnrollment";
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null); // For update function
  const [tabValue, setTabValue] = useState(0);

  // Fetch members from the backend
  const fetchMembers = () => {
    axios
      .get("http://localhost:8080/api/members")
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
      });
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  
  const handleSelectMember = (id) => {
    setSelectedMemberId(id);
  };

  return (
    <Router>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Gym Connect
        </Typography>

        {/* Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="Navigation Tabs"
            centered
          >
            <Tab
              label="Members"
              component={Link}
              to="/"
              sx={{
                color: "#333",
                "&.Mui-selected": {
                  color: "#ff5722",
                  fontWeight: "bold",
                },
              }}
            />
            <Tab
              label="Add Member"
              component={Link}
              to="/add-member"
              sx={{
                color: "#333",
                "&.Mui-selected": {
                  color: "#ff5722",
                  fontWeight: "bold",
                },
              }}
            />
          </Tabs>
        </Box>

        {/* Routes */}
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
                    backgroundColor: "#ff5722",
                    ":hover": { backgroundColor: "#e64a19" },
                    mb: 3,
                  }}
                >
                  Fetch Members
                </Button>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Members:
                </Typography>
                {members.map((member) => (
                  <Box key={member.memberId} sx={{ mb: 2 }}>
                    <Typography variant="body1">
                      <strong>Name:</strong> {member.firstName} {member.lastName}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Email:</strong> {member.email}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Membership Type:</strong>{" "}
                      {member.membershipType}
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => handleSelectMember(member.memberId)}
                      sx={{ mt: 1 }}
                    >
                      Update
                    </Button>
                  </Box>
                ))}
                {selectedMemberId && (
                  <Box sx={{ mt: 4 }}>
                    <UpdateMember
                      memberId={selectedMemberId}
                      fetchMembers={fetchMembers}
                    />
                    <Button
                      variant="contained"
                      onClick={() => setSelectedMemberId(null)}
                      sx={{
                        backgroundColor: "#757575",
                        ":hover": { backgroundColor: "#616161" },
                        mt: 2,
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

          <Route
            path="/add-member"
            element={<AddMember fetchMembers={fetchMembers} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;