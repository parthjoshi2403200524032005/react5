import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [value, setValue] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const getvalue = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        setValue(res?.data?.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openPopup = (user) => {
    setSelectedUser(user);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedUser(null);
    setShowPopup(false);
  };

  useEffect(() => {
    getvalue();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState("");

  const handleInputChange = (e) => {
    setEditedEmail(e.target.value);
  };

  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    setEditedEmail(selectedUser.email);
    setEditedFirstName(selectedUser.first_name);
    setEditedLastName(selectedUser.last_name);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedEmail("");
    setEditedFirstName("");
    setEditedLastName("");
  };
  const handleFirstNameChange = (e) => {
    setEditedFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setEditedLastName(e.target.value);
  };

  const handleSaveClick = () => {
    setSelectedUser({
      ...selectedUser,
      email: editedEmail,
      first_name: editedFirstName,
      last_name: editedLastName,
    });
    setIsEditing(false);
  };

  const handleDoneClick = () => {
    // Find the index of the selected user in the main data
    const index = value.findIndex((user) => user.id === selectedUser.id);

    // Create a copy of the main data array
    const updatedData = [...value];

    // Update the user object with the edited values
    updatedData[index] = {
      ...selectedUser,
      email: editedEmail,
      first_name: editedFirstName,
      last_name: editedLastName,
    };

    // Update the main data with the edited values
    setValue(updatedData);

    // Close the editing mode
    setIsEditing(false);
  };
  const handleallDoneClick = () => {
    handleDoneClick(); // Execute the first function
    closePopup(); // Execute the second function
  };
  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <h1
        className="bg-red-500 text-white py-2 px-4 mb-4 cursor-pointer rounded hover:bg-red-600 transition-colors duration-300"
        onClick={getvalue}
      >
        Get Users
      </h1>
      {value.map((user) => (
        <div
          key={user.id}
          className="bg-white p-4 rounded mb-4 hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-lg font-bold text-blue-500">
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => openPopup(user)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </button>
        </div>
      ))}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="backdrop-blur-md bg-black bg-opacity-50 absolute w-full h-full"></div>
          <div className="bg-white p-8 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
            <p className="text-lg font-bold text-blue-500 mb-2">
              ID: {selectedUser.id}
            </p>
            <p className="text-lg font-bold text-blue-500 mb-2">
              Name: {selectedUser.first_name} {selectedUser.last_name}
            </p>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editedFirstName}
                  onChange={handleFirstNameChange}
                  className="border border-gray-300 p-2 rounded mt-2"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={editedLastName}
                  onChange={handleLastNameChange}
                  className="border border-gray-300 p-2 rounded mt-2"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  value={editedEmail}
                  onChange={handleInputChange}
                  className="border border-gray-300 p-2 rounded mt-2"
                  placeholder="Email"
                />
              </>
            ) : (
              <p>Email: {selectedUser.email}</p>
            )}
            <div className="flex mt-4">
              <button
                onClick={closePopup}
                className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-600 transition-all duration-300"
              >
                Close
              </button>
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveClick}
                    className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600 transition-all duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <div className="space-x-4">
                <button
                  onClick={handleEditClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={handleallDoneClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Done
                </button>
              </div>
              
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
