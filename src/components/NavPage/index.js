import React from "react";
import { Route, Routes } from "react-router-dom";
//page
import LoginPage from "../../page/LoginPage";
import RegisterPage from "../../page/RegisterPage";
import HomePage from "../../page/HomePage";
import StationDetail from "../../page/StationDetail";

export default function NavPage({ handleLogin }) {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage handleLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/homepage/station/detail" element={<StationDetail />} />
    </Routes>
  );
}
