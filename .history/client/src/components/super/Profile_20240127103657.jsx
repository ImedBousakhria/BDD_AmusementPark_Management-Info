// Profile.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { users } from "../../consts";

const Profile = ({  }) => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Assuming you have a function to fetch user data by ID
    // Replace the following with your actual API call or data retrieval logic
    const fetchUserData = async () => {
      try {
        // Find the user with the matching ID in the array
        const user = users.find((user) => user.id === id);

        if (user) {
          setUserData(user);
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

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
