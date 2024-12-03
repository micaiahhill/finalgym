import React, { useState } from "react";
import axios from "axios";

function AddMember({ fetchMembers }) {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    membershipType: "",
  });

  const handleInputChange = (e) => {
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/members",
        newMember
      );
      alert("Member added successfully!"); // Success message
      fetchMembers(); // Refresh the members list
      // Reset the form
      setNewMember({
        firstName: "",
        lastName: "",
        email: "",
        membershipType: "",
      });
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to add member! Please try again."); // Failure message
    }
  };

  return (
    <div>
      <h3>Add New Member</h3>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="firstName"
          value={newMember.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={newMember.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={newMember.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="membershipType"
          value={newMember.membershipType}
          onChange={handleInputChange}
          placeholder="Membership Type"
          required
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;