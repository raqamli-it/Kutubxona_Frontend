import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { navbar } from "../../utils";
import Navbar from "../Navabar/index";

function Root() {
  return (
    <>
      <Navbar />
      <Routes>
        {navbar.map(({ id, path, component }) => (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route key={id} path={path} element={component} />
          </>
        ))}
      </Routes>
    </>
  );
}

export default Root;
