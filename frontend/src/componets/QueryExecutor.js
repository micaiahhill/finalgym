import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function QueryExecutor() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const executeQuery = async () => {
    setError(""); // Clear previous errors
    try {
      const response = await axios.post(
        "http://localhost:8080/api/members/query",
        query,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      setResults(response.data);
    } catch (err) {
      setError("Error executing query. Please try again.");
      console.error(err);
    }
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
        SQL Query Executor
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} mb={3}>
        <TextField
          label="Type your SQL query here"
          multiline
          rows={5}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          fullWidth
          sx={{ fontFamily: "monospace" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={executeQuery}
          sx={{
            backgroundColor: "#333",
            "&:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          Run Query
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ marginBottom: "1rem" }}>
          {error}
        </Alert>
      )}
      <Typography variant="h5" gutterBottom>
        Results:
      </Typography>
      {results.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {Object.keys(results[0]).map((key) => (
                  <TableCell key={key}>
                    <strong>{key}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row, index) => (
                <TableRow key={index}>
                  {Object.values(row).map((value, i) => (
                    <TableCell key={i}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No results to display</Typography>
      )}
    </Container>
  );
}

export default QueryExecutor;
