import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Albums from "./Components/Album/Albums";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/:user" render={props => <Home {...props} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
