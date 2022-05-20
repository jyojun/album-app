import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Albums from "./Components/Album/Albums";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import AlbumUpload from "./Components/Album/AlbumUpload";
import AlbumDetail from "./Components/Album/AlbumDetail";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:albumId" element={<AlbumDetail />} />
        <Route path="/albums/upload" element={<AlbumUpload />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/:user" render={props => <Home {...props} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
