import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postValue = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res?.data?.token) {
          navigate("/login");
          console.log(res);
        } else {
          alert("Empty");
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <p className="text-gray-500 mb-4">
          Example : "email": "eve.holt@reqres.in",
          "password": "cityslicka"
        </p>
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600 transition-colors duration-300"
          onClick={postValue}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Data;
