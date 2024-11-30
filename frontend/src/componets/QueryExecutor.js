import React, { useState } from "react";
import axios from "axios";

function QueryExecutor() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const executeQuery = async () => {
    setError(""); // Clear previous errors
    try {
      const response = await axios.post("http://localhost:8080/api/members/query", query, {
        headers: {
          "Content-Type": "text/plain",
        },
      });
      setResults(response.data);
    } catch (err) {
      setError("Error executing query. Please try again.");
      console.error(err);
    }
  };

  return (
    <div>
      <h1>SQL Query Executor</h1>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows="5"
        cols="50"
        placeholder="Type your SQL query here"
      />
      <br />
      <button onClick={executeQuery}>Run Query</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <h2>Results:</h2>
        {results.length > 0 ? (
          <table border="1">
            <thead>
              <tr>
                {Object.keys(results[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No results to display</p>
        )}
      </div>
    </div>
  );
}

export default QueryExecutor;
