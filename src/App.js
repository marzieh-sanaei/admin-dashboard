import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LogIn from "./Components/logIn";
import Dashboard from "./Components/dashboard";
import Header from "./Components/header";
import "./index.css";
import Users from "./Components/dashboards/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboards/user" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;