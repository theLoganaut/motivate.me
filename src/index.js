import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Connections from "./Routes/Connections";
import Profile from "./Routes/Profile";
import More from "./Routes/More";
import Communities from "./Routes/Communities";
import Notifications from "./Routes/Notifications";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Login" />} />

      <Route path="/Login" element={<Login />} />
      <Route path="/Connections" element={<Connections />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile/*" element={<Profile />} />
      <Route path="/More" element={<More />} />
      <Route path="/Communities/*" element={<Communities />} />
      <Route path="/Notifications" element={<Notifications />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
