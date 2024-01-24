// Profile.js
import React from "react";
import { useParams } from "react-router-dom";

const Profile = ({ match }) => {
  const { id } = useParams();
  // Fetch user data based on userId and display the profile

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
      {/* Render the user's profile information */}
    </div>
  );
};

export default Profile;
