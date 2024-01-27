import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zones } from "../../consts";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to find user data by ID within zones
    const findUserData = () => {
      for (const zone of zones) {
        for (const team of zone.teams) {
          for (const staffMember of team.staff) {
            if (staffMember.id === parseInt(id)) {
              setUserData(staffMember);
              return;
            }
          }
        }
      }
      console.error("User not found");
    };

    findUserData();
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
