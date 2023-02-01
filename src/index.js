import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfileJobSeeker from "./pages/ProfileJobSeeker";
import EditProfileJobSeeker from "./pages/EditProfileJobSeeker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile/pekerja" element={<ProfileJobSeeker />} />
      <Route path="/edit-profile/pekerja" element={<EditProfileJobSeeker />} />
    </Routes>
  </BrowserRouter>
);
