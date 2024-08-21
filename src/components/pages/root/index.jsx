import React from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { navbar } from "../../utils";
import Navbar from "../Navabar/index"; // Pathni to'g'ri tekshiring
import LogIN from "../../LogIn/idnex"; // Pathni to'g'ri tekshiring

function Root() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kirish amalga oshirilganda boshqa sahifaga yo‘naltirish yoki boshqa amalni bajarasiz
    console.log("Logged in");
    navigate("/home"); // yoki boshqa bir sahifaga
  };

  return (
    <>
      <Navbar />
      <Routes>
        {/* Birinchi sahifa - LogIN */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIN onLogin={handleLogin} />} />

        {/* Home sahifasi va boshqa sahifalar */}
        {navbar.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </>
  );
}

export default Root;
