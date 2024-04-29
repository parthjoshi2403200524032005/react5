import React, { useState, useEffect } from "react";
import axios from "axios";

export const Task1 = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    axios
      .put("https://reqres.in/api/users/2")
      .then((res) => setValue(res))
      .catch((err) => console.log(err));
  }, []); 

  return <div>{JSON.stringify(value)}</div>;
};

export const Task2 = () => {
  const [value1, setValue1] = useState(null);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/login")
      .then((res) => setValue1(res.data))
      .catch((err) => setValue1(err.response.data)); 
  }, []); 

  return <div>{JSON.stringify(value1)}</div>;
};
