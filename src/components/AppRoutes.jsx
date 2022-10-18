import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "./NavBar";

const AppRoutes = () => {

  if( !navigator.geolocation) {
    alert("Tu navegador no tiene opción de Geolocalización.");
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;