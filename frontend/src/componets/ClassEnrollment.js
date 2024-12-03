import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h2>Class Enrollment Details</h2>
      <input
        type="text"
        placeholder="Enter class name (e.g., Yoga)"
        value={classType}
        onChange={(e) => setClassType(e.target.value)}
      />
      <button onClick={fetchEnrollmentDetails}>Fetch Enrollment</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <h3>Enrollment Details for {classType}</h3>
        {enrollmentDetails.length > 0 ? (
          <table border="1">
            <thead>
              <tr>
                <th>Class Type</th>
                <th>Location</th>
                <th>Time</th>
                <th>Day</th>
                <th>Instructor</th>
                <th>Member</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {enrollmentDetails.map((detail, index) => (
                <tr key={index}>
               <td>{detail.CLASSTYPE}</td>
    <td>{detail.LOCATION}</td>
    <td>{detail.CLASSTIME}</td>
    <td>{detail.CLASSDAY}</td>
    <td>{detail.INSTRUCTORFIRSTNAME} {detail.INSTRUCTORLASTNAME}</td>
    <td>{detail.MEMBERFIRSTNAME} {detail.MEMBERLASTNAME}</td>
    <td>{detail.EMAIL}</td>
  </tr>
))}
            </tbody>
          </table>
        ) : (
          <p>No enrollment details found.</p>
        )}
      </div>
    </div>
  );
}

export default ClassEnrollment;
