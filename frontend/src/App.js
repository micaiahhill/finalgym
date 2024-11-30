import React, { useState } from "react";
import axios from "axios";
import QueryExecutor from "./componets/QueryExecutor";
import { Container, Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  const [members, setMembers] = useState([]);

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

  return (
    <div>
      <h1>Gym Connect</h1>
      <button onClick={fetchMembers}>Fetch Members</button>
      <div>
        <h2>Members:</h2>
        {members.map((member) => (
          <div key={member.memberId}>
            <p>Name: {member.firstName} {member.lastName}</p>
            <p>Email: {member.email}</p>
          </div>
        ))}
      </div>
      <Container>
      <QueryExecutor/>
    </Container>
    </div>
  );
}

export default App;
