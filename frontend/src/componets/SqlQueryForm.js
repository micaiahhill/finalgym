import React, { useState } from "react";
import { TextField, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const SqlQueryForm = () => {
  const [sqlQuery, setSqlQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleQueryChange = (event) => {
    setSqlQuery(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/executeSql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sql: sqlQuery }),
      });

      if (!response.ok) {
        throw new Error("Query failed");
      }

      const data = await response.json();
      setResults(data); // Store the response from the backend to display
    } catch (error) {
      console.error("Error executing query:", error);
      setResults([]);
    }
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ marginTop: "20px" }}>
      <TextField
        label="Enter SQL Query"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        value={sqlQuery}
        onChange={handleQueryChange}
        sx={{ marginBottom: "20px" }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ marginBottom: "20px" }}>
        Execute Query
      </Button>

      {results.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="results table">
            <TableHead>
              <TableRow>
                {Object.keys(results[0]).map((key) => (
                  <TableCell key={key} align="left">
                    <strong>{key}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value, idx) => (
                    <TableCell key={idx} align="left">
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default SqlQueryForm;