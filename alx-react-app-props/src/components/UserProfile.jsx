// src/components/UserProfile.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Make sure the path is correct

const UserProfile = () => {
  // Use the context to access the user information
  const user = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2> {/* Display the name */}
      <p>Age: {user.age}</p> {/* Display the age */}
      <p>Bio: {user.bio}</p> {/* Display the bio */}
    </div>
  );
};

export default UserProfile;

  