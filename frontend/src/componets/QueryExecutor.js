import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Alert,
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
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "80%", boxShadow: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            SQL Query Executor
          </Typography>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ color: "#757575" }}
          >
            Run SQL queries to fetch or update member information.
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 3,
            }}
          >
            <TextField
              label="SQL Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              placeholder="Type your SQL query here"
            />
            <Button
              variant="contained"
              onClick={executeQuery}
              sx={{
                backgroundColor: "#ff5722",
                ":hover": { backgroundColor: "#e64a19" },
              }}
              fullWidth
            >
              Run Query
            </Button>
          </Box>
          {error && (
            <Alert severity="error" sx={{ mt: 3 }}>
              {error}
            </Alert>
          )}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Results:
            </Typography>
            {results.length > 0 ? (
              <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {Object.keys(results[0]).map((key) => (
                        <TableCell key={key} sx={{ fontWeight: "bold" }}>
                          {key}
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
              <Typography variant="body1" color="textSecondary">
                No results to display
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default QueryExecutor;
