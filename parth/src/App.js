import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./axios2didi/home";
import Data from "./axios2didi/Data";
import Login from "./axios2didi/login";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="data" element={<Data />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="text" element={<Text />} /> */}
      </Routes>
    </Router>
  );
}

export default App;