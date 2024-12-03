import React, { useState, useEffect } from "react";
import axios from "axios";

function ClassSchedule() {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [day, setDay] = useState("");

  // Fetch all classes
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/members/classes")
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  // Filter classes by day
  const handleDayChange = (selectedDay) => {
    setDay(selectedDay);
    setFilteredClasses(classes.filter((c) => c.classDay === selectedDay));
  };

  return (
    <div>
      <h2>Class Schedule</h2>
      <select onChange={(e) => handleDayChange(e.target.value)}>
        <option value="">Select a day</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      <div>
        <h3>Classes on {day}:</h3>
        {filteredClasses.map((classData) => (
          <div key={classData.classId}>
            <p>
              <strong>{classData.classType}</strong> <br />
              Location: {classData.location} <br />
              Time: {classData.classTime} <br />
              Instructor: {classData.instructorFirstName} {classData.instructorLastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassSchedule;