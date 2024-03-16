

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Resident from "./Resident";
import Merchant from "./Merchant";
import Signin from "./Signin";
import Howitworks from "./Howitworks";
import About from "./About";
import Signup from "./Signup";
import SignUpChoice from "./SUC";
import ResidentDash from "./ResidentDash";
import MDash from "./MDash";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ressignup" element={<Resident/>} />
        <Route path="/msignup" element={<Merchant/>} />
        <Route path="/signupc" element={<SignUpChoice/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/hiw" element={<Howitworks/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resdash" element={<ResidentDash />} />
        <Route path="/md" element={<MDash />} />
        <Route path="/dbm" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
