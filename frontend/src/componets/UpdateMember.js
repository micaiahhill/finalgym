//Use this for update  new members.
//Include a form with fields for member details (e.g., name, email, phone).
//Make a POST request to your backend when the form is submitted.
 

import React,{useState} from "react";
import axios from "axios";

function UpdateMember({ memberId,fetchMembers}) {
 const [member,setMember] = useState({
  firstName: "",
  lastName: "",
  email: "",
  membershipType: "",
  //phoneNumber:"",
 });

 const handleInputChange = (e) =>{
  setMember({
    ...member,
    [e.target.name]: e.target.value,
  });
 };

 const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put(
      `http://localhost:8080/api/members/${memberId}`,
      member
    );
    alert(response.data); // Show success/failure message
    fetchMembers(); // Refresh the members list
  } catch (error) {
    console.error("Error updating member:", error);
  }
};

return (
  <div>
    <h3>Update Member</h3>
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        name="firstName"
        value={member.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={member.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={member.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="membershipType"
        value={member.membershipType}
        onChange={handleInputChange}
        placeholder="Membership Type"
      />
      <button type="submit">Update Member</button>
    </form>
  </div>
);
}

export default UpdateMember;