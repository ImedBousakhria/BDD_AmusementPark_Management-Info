import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { zones } from "../../consts";

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    // Function to find user data by ID within zones
    const findUserData = () => {
      for (const zone of zones) {
        for (const team of zone.teams) {
          for (const staffMember of team.staff) {
            if (staffMember.id === parseInt(id)) {
              setUserData({
                ...staffMember,
                team: team.name,
                zone: zone.title,
              });
              setEditedUserData({
                ...staffMember,
                team: team.name,
                zone: zone.title,
              });
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const saveChanges = () => {
    setUserData(editedUserData);
    setEditMode(false);
  };

  return (
    <div className="flex rounded-lg p-6 bg-white justify-center items-center h-screen w-[90%]">
      <div className=" flex flex-col w-full h-full justify-between ">
        {userData ? (
          <div className=" space-y-16">
            {" "}
            <h2 className="text-center text-xl font-bold mb-4">User Profile</h2>
            <p>
              <span className="font-bold">User ID:</span> {userData.id}
            </p>
            <p>
              <span className="font-bold">User Name:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={editedUserData.name}
                  onChange={handleInputChange}
                />
              ) : (
                userData.name
              )}
            </p>
            <p>
              <span className="font-bold">User Email:</span>{" "}
              {editMode ? (
                <input
                  type="email"
                  name="email"
                  value={editedUserData.email}
                  onChange={handleInputChange}
                />
              ) : (
                userData.email
              )}
            </p>
            <p>
              <span className="font-bold">Team:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  name="team"
                  value={editedUserData.team}
                  onChange={handleInputChange}
                />
              ) : (
                userData.team
              )}
            </p>
            <p>
              <span className="font-bold">Zone:</span>{" "}
              {editMode ? (
                <input
                  type="text"
                  name="zone"
                  value={editedUserData.zone}
                  onChange={handleInputChange}
                />
              ) : (
                userData.zone
              )}
            </p>
            {editMode && (
              <button
                className="bg-blue-500 text-white py-2 rounded mt-4 w-max place-self-end px-10"
                onClick={saveChanges}
              >
                Save
              </button>
            )}
          </div>
        ) : (
          <p>User not found</p>
        )}
        <button
          className="bg-blue-500 text-white py-2 rounded mt-4 w-max place-self-end px-"
          onClick={toggleEditMode}
        >
          {editMode ? "Cancel" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
