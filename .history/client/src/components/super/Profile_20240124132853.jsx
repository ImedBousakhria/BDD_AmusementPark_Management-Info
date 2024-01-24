// Profile.js
import React from "react";
import { useParams } from "react-router-dom";
import { users } from "./db"; // Import your virtual database

const Profile = ({ match }) => {
  const { id } = useParams();
  const userData = users[id];
  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <p>User ID: {userData.id}</p>
          <p>User Name: {userData.name}</p>
          <p>User Email: {userData.email}</p>
          {/* Render other user profile information */}
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default Profile;
