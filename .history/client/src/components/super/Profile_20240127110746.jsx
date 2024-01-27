import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zones } from "../../consts";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Function to find user data by ID within zones
    const findUserData = () => {
      for (const zone of zones) {
        for (const team of zone.teams) {
          for (const staffMember of team.staff) {
            if (staffMember.id === parseInt(id)) {
              setUserData({ ...staffMember, team: team.name, zone: zone.title });
              return;
            }
          }
        }
      }
      console.error("User not found");
    };

    findUserData();
  }, [id]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-center text-xl font-bold mb-4">User Profile</h2>
        {userData ? (
          <div>
            <p>
              <span className="font-bold">User ID:</span> {userData.id}
            </p>
            <p>
              <span className="font-bold">User Name:</span> {editMode ? <input type="text" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} /> : userData.name}
            </p>
            <p>
              <span className="font-bold">User Email:</span> {editMode ? <input type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /> : userData.email}
            </p>
            <p>
              <span className="font-bold">Team:</span> {userData.team}
            </p>
            <p>
              <span className="font-bold">Zone:</span> {userData.zone}
            </p>
            {/* Render other user profile information */}
            {editMode && <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={toggleEditMode}>Save</button>}
          </div>
        ) : (
          <p>User not found</p>
        )}
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={toggleEditMode}>{editMode ? "Cancel" : "Edit"}</button>
      </div>
    </div>
  );
};

export default Profile;
