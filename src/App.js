import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LogIn from "./Components/logIn";
import Dashboard from "./Components/dashboard";
import Header from "./Components/header";
import "./index.css";
import Users from "./Components/dashboards/user";
import Products from "./Components/dashboards/products";
import Orders from "./Components/dashboards/orders";
import Delivery from "./Components/dashboards/delivery";
import State from "./Components/dashboards/state";
import Notifications from "./Components/dashboards/notifications";
import Profile from "./Components/dashboards/profile";
import Setting from "./Components/dashboards/setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboards/user" element={<Users />} />
        <Route path="/dashboards/products" element={<Products />} />
        <Route path="/dashboards/orders" element={<Orders />} />
        <Route path="/dashboards/delivery" element={<Delivery />} />
        <Route path="/dashboards/state" element={<State />} />
        <Route path="/dashboards/notifications" element={<Notifications />} />
        <Route path="/dashboards/profile" element={<Profile />} />
        <Route path="/dashboards/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
