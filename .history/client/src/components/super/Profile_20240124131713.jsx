// Profile.js
import React from "react";

const Profile = ({ match }) => {
  const userId = match.params.id; // Access the user ID from the URL parameters
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
