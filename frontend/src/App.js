import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import axios from "axios";
import QueryExecutor from "./componets/QueryExecutor.js";
import UpdateMember from "./componets/UpdateMember.js";
import AddMember from "./componets/AddMembers.js";
import ClassSchedule from "./componets/ClassSchedule.js";
import ClassEnrollment from "./componets/ClassEnrollment.js";
import { Container, Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(null); // For update function

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
      <div>
        <h1>Gym Connect</h1>

        {/* Navigation Links */}
        <nav>
          <Link to="/">Members</Link> | <Link to="/add-member">Add Member</Link>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Default Route: Display Members */}
          <Route
            path="/"
            element={
              <div>
                <button onClick={fetchMembers}>Fetch Members</button>
                <div>
                  <h2>Members:</h2>
                  {members.map((member) => (
                    <div key={member.memberId}>
                      <p>
                        Name: {member.firstName} {member.lastName}
                      </p>
                      <p>Email: {member.email}</p>
                      <p>Membership Type: {member.membershipType}</p>
                      <button onClick={() => handleSelectMember(member.memberId)}>
                        Update
                      </button>
                    </div>
                  ))}
                </div>
                {selectedMemberId && (
                  <div>
                    <UpdateMember
                      memberId={selectedMemberId}
                      fetchMembers={fetchMembers}
                    />
                    <button onClick={() => setSelectedMemberId(null)}>
                      Cancel
                    </button>
                  </div>
                )}
                <ClassEnrollment />
                <ClassSchedule />
                <Container>
                  <QueryExecutor />
                </Container>
              </div>
            }
          />

          {/* Add Member Route */}
          <Route
            path="/add-member"
            element={<AddMember fetchMembers={fetchMembers} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;